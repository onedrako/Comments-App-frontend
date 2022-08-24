import { createComment } from '@customTypes/commentTypes'
import { api } from '@utils/axiosConfig'

export class CommentsService {
  private static instance: CommentsService

  async createComment (comment: createComment) {
    const response = await api.post('/comments', comment)
    return response.data
  }

  async updateComment (comment: string, id: number) {
    const response = await api.patch(`/comments/${id}`, { comment })
    return response.data
  }

  async deleteComment (id: number) {
    const response = await api.delete(`/comments/${id}`)
    return response.data
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new CommentsService()
    }
    return this.instance
  }
}

import { createComment } from '@customTypes/commentTypes'
import { api } from '@utils/axiosConfig'

export class CommentsService {
  async createComment (comment: createComment) {
    const response = await api.post('/comments', comment)
    return response.data
  }

  async updateComment (comment: string, id: number) {
    const response = await api.put(`/comments/${id}`, { comment })
    return response.data
  }

  async deleteComment (id: number) {
    const response = await api.delete(`/comments/${id}`)
    return response.data
  }
}

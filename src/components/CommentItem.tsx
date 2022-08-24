import { commentsType } from '@customTypes/commentTypes'
import React, { useState } from 'react'
import { CommentsService } from '../service/comments.service'
import { UpdateComment } from './UpdateComment'

// Compponent that render a comment with the update and delete options
const CommentItem = ({ comment }: {comment: commentsType}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const service = new CommentsService()

  const handleDelete = async (id: number) => {
    await service.deleteComment(id)
    setIsDeleting(false)
  }

  return (
    <div>
    <p>{comment.email}</p>
    <p>{comment.comment}</p>

    <div>
      {isEditing && <UpdateComment changeState={setIsEditing} commentId={comment.id} />}
      {!isDeleting && <button onClick={() => setIsEditing(!isEditing) }>{!isEditing ? 'Edit' : 'Cancel'}</button>}

      {isDeleting && <button onClick={() => handleDelete(comment.id)} >Confirm Delete</button>}
      {!isEditing && (<button onClick={() => setIsDeleting(!isDeleting)}>{!isDeleting ? 'Delete' : 'Cancel'}</button>)}
    </div>

  </div>
  )
}

export default CommentItem

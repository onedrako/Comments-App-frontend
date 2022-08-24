import { commentsType } from '@customTypes/commentTypes'
import React, { useState } from 'react'
import { UpdateComment } from './UpdateComment'

const CommentItem = ({ comment }: {comment: commentsType}) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
    <p>{comment.email}</p>
    <p>{comment.comment}</p>

    <div>
      {isEditing && <UpdateComment changeState={setIsEditing} commentId={comment.id} />}
      <button onClick={() => setIsEditing(!isEditing) }>{!isEditing ? 'Edit' : 'Cancel'}</button>

      {!isEditing && (
        <button>Delete</button>
      )}
    </div>

  </div>
  )
}

export default CommentItem

// Dependencies
import React, { useState } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setUpdateData } from '@redux/slices/uiSlice'

// Service
import { CommentsService } from '../service/comments.service'

// Components
import { UpdateComment } from './UpdateComment'

// Styled Components
import { CommentItemStyled } from '@styles/comments/CommentItem'
import { ActionButtonStyled } from '@styles/comments/globalStyledElements'

// Custom Types
import { commentsType } from '@customTypes/commentTypes'

// Component that render a comment with the update and delete options
const CommentItem = ({ comment }: {comment: commentsType}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const service = new CommentsService()
  const dispatch = useDispatch()
  const updateData = useSelector((state: any) => state.ui.updateData)

  const handleDelete = async (id: number) => {
    await service.deleteComment(id)
    setIsDeleting(false)
    dispatch(setUpdateData(!updateData))
  }

  return (
    <CommentItemStyled>
      <p className='comment_email'>{comment.email}</p>
      <p className='comment_body'>{comment.comment}</p>

      <div className='comment_actions'>
        {isEditing && <UpdateComment changeState={setIsEditing} commentId={comment.id} />}
        {!isDeleting && !isEditing && <ActionButtonStyled type="button" onClick={() => setIsEditing(!isEditing) }>Edit</ActionButtonStyled>}

        {isDeleting && <button onClick={() => handleDelete(comment.id)} >Confirm Delete</button>}
        {!isEditing && (<ActionButtonStyled type="button" className='comment_actions--item' onClick={() => setIsDeleting(!isDeleting)}>{!isDeleting ? 'Delete' : 'Cancel'}</ActionButtonStyled>)}
      </div>
    </CommentItemStyled>
  )
}

export default CommentItem

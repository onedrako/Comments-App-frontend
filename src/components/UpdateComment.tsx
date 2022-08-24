// Dependencies
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setUpdateData } from '@redux/slices/uiSlice'

// Service
import { CommentsService } from '../service/comments.service'

// Styled Components
import { UpdateCommentFormStyled } from '@styles/comments/UpdateComment'
import { ActionButtonStyled, ConfirmButtonStyled, ErrorMessageStyled, TextAreaStyled } from '@styles/comments/globalStyledElements'

// Component to update a comment and send it to the db using the service, setting the comment to previos view before starting to update
const UpdateComment = ({ changeState, commentId } : {changeState: React.Dispatch<React.SetStateAction<boolean>>, commentId: number}) => {
  const service = new CommentsService()
  const dispatch = useDispatch()
  const updateData = useSelector((state: any) => state.ui.updateData)

  const formik = useFormik({
    initialValues: {
      comment: ''
    },
    onSubmit: async (values, actions) => {
      await service.updateComment(values.comment, commentId)
      actions.resetForm()
      changeState(false)
      dispatch(setUpdateData(!updateData))
    },
    validationSchema: Yup.object({
      comment: Yup.string().required('Please write your comment before sending changes')
    })
  })

  return (
    <UpdateCommentFormStyled>
      <TextAreaStyled {...formik.getFieldProps('comment')} placeholder="Updated comment..." />
      {formik.touched.comment && formik.errors.comment && <ErrorMessageStyled>{formik.errors.comment}</ErrorMessageStyled> }

      <div className='actions-container'>
        <ConfirmButtonStyled className='update_button' onClick={() => formik.handleSubmit()} type="button">Confirm Changes</ConfirmButtonStyled>
        <ActionButtonStyled type="button" onClick={() => changeState(false)} >Cancel</ActionButtonStyled>
      </div>

    </UpdateCommentFormStyled>
  )
}

export { UpdateComment }

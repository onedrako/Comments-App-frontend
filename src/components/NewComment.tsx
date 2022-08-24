// Dependencies
import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setUpdateData } from '@redux/slices/uiSlice'

// Service
import { CommentsService } from '../service/comments.service'

// Utils
import safeHTML from '@utils/sanitizeHTML'

// Styled Components
import { ConfirmButtonStyled, ErrorMessageStyled, TextAreaStyled } from '@styles/comments/globalStyledElements'
import { NewCommentContainerStyled, NewCommentFormStyled } from '@styles/comments/NewComment'

// Custom Types
import { createComment } from '@customTypes/commentTypes'

// Component ald logic to create a new comment and send it to the db using the service
const NewComment = () => {
  const service = new CommentsService()
  const dispatch = useDispatch()
  const updateData = useSelector((state: any) => state.ui.updateData)

  const formik = useFormik({
    initialValues: {
      email: '',
      comment: ''
    },
    onSubmit: async (values, actions) => {
      const createCommentData: createComment = {
        email: values.email,
        comment: values.comment
      }

      const safeData = safeHTML(createCommentData)
      try {
        await service.createComment(safeData)
        actions.resetForm()
        dispatch(setUpdateData(!updateData))
      } catch (error) {
        console.log(error)
      }
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required('Please use a valid email address :D'),
      comment: Yup.string().required('Please write your comment')
    })
  })

  return (
    <NewCommentContainerStyled>
      <h2>Leave Comments</h2>

      <NewCommentFormStyled onSubmit={() => formik.handleSubmit()} >
        <input {...formik.getFieldProps('email')} type="text" placeholder='email'/>
        {formik.touched.email && formik.errors.email && <ErrorMessageStyled>{formik.errors.email}</ErrorMessageStyled>}

        <TextAreaStyled {...formik.getFieldProps('comment')} placeholder='Add a comment...' />
        {formik.touched.comment && formik.errors.comment && <ErrorMessageStyled >{formik.errors.comment}</ErrorMessageStyled> }

        <ConfirmButtonStyled onClick={() => formik.handleSubmit()} type="button">Comment</ConfirmButtonStyled>
      </NewCommentFormStyled>

    </NewCommentContainerStyled>
  )
}

export { NewComment }

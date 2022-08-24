import React from 'react'
import { createComment } from '@customTypes/commentTypes'
import safeHTML from '@utils/sanitizeHTML'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CommentsService } from '../service/comments.service'
import { useDispatch, useSelector } from 'react-redux'
import { setUpdateData } from '@redux/slices/uiSlice'
import { NewCommentContainerStyled, NewCommentFormStyled } from '@styles/comments/NewComment'

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

      <NewCommentFormStyled>
        <input {...formik.getFieldProps('email')} type="text" placeholder='email'/>
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

        <textarea {...formik.getFieldProps('comment')} placeholder='Add a comment...' />
        {formik.touched.comment && formik.errors.comment && <div>{formik.errors.comment}</div> }

        <button onClick={() => formik.handleSubmit()} type="button">Comment</button>
      </NewCommentFormStyled>

    </NewCommentContainerStyled>
  )
}

export { NewComment }

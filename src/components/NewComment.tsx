import React from 'react'
import { createComment } from '@customTypes/commentTypes'
import safeHTML from '@utils/sanitizeHTML'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CommentsService } from '../service/comments.service'
import { useDispatch, useSelector } from 'react-redux'
import { setUpdateData } from '@redux/slices/uiSlice'

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
    <div>
      <h1>Leave Comments</h1>
      <form>

        <input {...formik.getFieldProps('email')} type="text" />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

        <input {...formik.getFieldProps('comment')} type="textarea" />
        {formik.touched.comment && formik.errors.comment && <div>{formik.errors.comment}</div> }

        <button onClick={() => formik.handleSubmit()} type="button">Comment</button>
      </form>
    </div>
  )
}

export { NewComment }

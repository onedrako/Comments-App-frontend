import React from 'react'
import { createComment } from '@customTypes/commentTypes'
import safeHTML from '@utils/sanitizeHTML'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CommentsService } from '../service/comments.service'

const NewComment = () => {
  const service = new CommentsService()

  const formik = useFormik({
    initialValues: {
      email: '',
      comment: ''
    },
    onSubmit: (values, actions) => {
      const createCommentData: createComment = {
        email: values.email,
        comment: values.comment
      }

      const safeData = safeHTML(createCommentData)
      service.createComment(safeData)
      actions.resetForm()
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

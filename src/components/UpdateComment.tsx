import { useFormik } from 'formik'
import React from 'react'
import { CommentsService } from '../service/comments.service'
import * as Yup from 'yup'

const UpdateComment = ({ changeState, commentId } : {changeState: React.Dispatch<React.SetStateAction<boolean>>, commentId: number}) => {
  const service = new CommentsService()

  const formik = useFormik({
    initialValues: {
      comment: ''
    },
    onSubmit: async (values, actions) => {
      await service.updateComment(values.comment, commentId)
      actions.resetForm()
      changeState(false)
    },
    validationSchema: Yup.object({
      comment: Yup.string().required('Please write your comment before updating')
    })
  })

  return (
    <form>
      <input {...formik.getFieldProps('comment')} type="textarea" />
      {formik.touched.comment && formik.errors.comment && <div>{formik.errors.comment}</div> }
      <button onClick={() => formik.handleSubmit()} type="button">Confirm Changes</button>
    </form>
  )
}

export { UpdateComment }

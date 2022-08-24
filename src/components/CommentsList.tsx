import React from 'react'
import { commentsType } from '@customTypes/commentTypes'
import CommentItem from './CommentItem'

type props = {
  comments: commentsType[]
}

const CommentsList = ({ comments }: props) => {
  return (
    <>
    {comments?.map(comment => (
        <CommentItem comment={comment} key={comment.id} />
    ))}
    </>
  )
}

export { CommentsList }

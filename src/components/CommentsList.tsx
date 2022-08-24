import React from 'react'
import CommentItem from './CommentItem'
import { commentsType } from '@customTypes/commentTypes'

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

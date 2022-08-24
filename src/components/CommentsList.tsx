import React from 'react'
import { commentsType } from '@customTypes/commentTypes'

type props = {
  comments: commentsType[]
}

const CommentsList = ({ comments }: props) => {
  return (
    <>
    {comments?.map(comment => (
        <div key={comment.id}>
          <p>{comment.email}</p>
          <p>{comment.comment}</p>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
    ))}
    </>

  )
}

export { CommentsList }

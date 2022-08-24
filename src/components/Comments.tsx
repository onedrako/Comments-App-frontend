import React from 'react'
import { useGetData } from '@hooks/useGetData'
import { CommentsList } from './CommentsList'
import { commentsType } from '@customTypes/commentTypes'
import { NewComment } from './NewComment'

const Comments = () => {
  const [data, loading, error] = useGetData<commentsType>('/comments')

  console.log(loading)
  console.log(error)

  return (
    <main>
      <section>
        <NewComment/>
        <CommentsList comments={data.sort((a, b) => b.id - a.id) }/>
      </section>
    </main>
  )
}

export { Comments }

import React from 'react'
import { useGetData } from '@hooks/useGetData'
import { CommentsList } from './CommentsList'
import { commentsType } from '@customTypes/commentTypes'
import { NewComment } from './NewComment'
import { useSelector } from 'react-redux'

const Comments = () => {
  const updateData = useSelector((state: any) => state.ui.updateData)
  const [data, loading, error] = useGetData<commentsType>('/comments', updateData)

  // console.log(loading)
  // console.log(error)
  console.log(updateData)
  console.log(data)

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

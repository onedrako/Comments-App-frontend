import React from 'react'
import { useGetData } from '@hooks/useGetData'
import { CommentsList } from './CommentsList'
import { commentsType } from '@customTypes/commentTypes'
import { NewComment } from './NewComment'
import { useSelector } from 'react-redux'

import { CommentsContainerStyled } from '@styles/comments/CommentsContainer'

const Comments = () => {
  const updateData = useSelector((state: any) => state.ui.updateData)
  const [data, loading, error] = useGetData<commentsType>('/comments', updateData)

  return (
    <main>
      <CommentsContainerStyled>
        <NewComment/>
        {loading && <p>Loading updated data...</p>}
        {error && <p>An error have happened </p>}
        <CommentsList comments={data.sort((a, b) => b.id - a.id) }/>
      </CommentsContainerStyled>
    </main>
  )
}

export { Comments }

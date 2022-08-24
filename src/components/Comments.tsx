// Dependencies
import React from 'react'
import { useSelector } from 'react-redux'

// Custom Hooks
import { useGetData } from '@hooks/useGetData'

// Components
import { NewComment } from './NewComment'
import { CommentsList } from './CommentsList'

// Styled Components
import { CommentsContainerStyled } from '@styles/comments/CommentsContainer'

// Custom Types
import { commentsType } from '@customTypes/commentTypes'

// Component to render the comments section, with the principal to add a new one and the list of comments
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

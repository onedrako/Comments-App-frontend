import styled from 'styled-components'

export const CommentItemStyled = styled.div`
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > .comment_email{
    font-size: 1rem;
    font-weight: bold;
  }

  & > .comment_body{
    font-size: 1rem;
  }

  & > .comment_actions{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`

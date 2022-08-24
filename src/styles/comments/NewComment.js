import styled from 'styled-components'

export const NewCommentContainerStyled = styled.div`
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h2{
    font-size: 1.5rem;
  }
`

export const NewCommentFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > input{
    border: 2px solid #a9a9a9;
    max-width: 650px;
    font-size: 1rem;
    height: 30px;
    padding: 0 5px;
  }

`

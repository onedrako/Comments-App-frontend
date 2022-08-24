export interface createComment {
  email: string;
  comment: string;
}

export interface commentsType extends createComment{
  id: number,
  createdAt: string;
  updateAt: string
}

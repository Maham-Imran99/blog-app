import { gql } from '@apollo/client';

export const CREATE_ARTICLE = gql`
mutation CreatePost($input: CreatePostInput!) {
    createPost(createPostInput: $input) {
      message
      status
      post {
        id
        title
        description
       createdAt
       time
       imgUrl
       categories {
        id
        name
       }
      }
    }
  }
`

export const DELETE_ARTICLE = gql`
mutation removePost($input: Int!) {
  removePost(id: $input) {
    message
    status
  }
}
`

export const EDIT_ARTICLE = gql`
mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(updatePostInput: $input) {
      message
      status
      post {
        id
        title
        description
      }
    }
  }
`

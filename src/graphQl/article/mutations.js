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
       userId
      }
    }
  }
  


`
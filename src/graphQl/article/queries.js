import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
query GetAllPosts {
  allPosts(paginationInput: { page: 1, limit: 10 }) {
    message
    status
    posts {
      id
      title
      description
      imgUrl
      time
      user {
        name
        username
      }
      categories {
          id
          name
        }
      
    }
    total
    page
    limit
  }
}
`

export const MY_ARTICLES = gql`
query myPosts {
    myPosts {
       posts {
      id
      title
      description
      imgUrl
      time
      user {
        name
        username
      }
      categories {
          id
          name
        }
      
    }
    }
  }
`

export const GET_ARTICLES = gql`
query getPosts($input:Int!){
    getPost(postId:$input){
      message
      post {
        id
        categories {
          name
        }
        createdAt
        description
        time
        title
        user {
          name
        }
        imgUrl
        getComments{
          count
          comments{
          	id
            description:desc
          
            user{
              name
            }
            getReplies{
              count
            }
          }
        }
      }
    }
  }

`

export const SEARCH_POSTS = gql`
query searchPosts($search: String!, $pagination: PaginationInput!) {
  searchPosts(searchInput: $search, paginationInput: $pagination) {
    posts {
      id
      categories {
        name
      }
      createdAt
      description
      time
      title
      user {
        name
      }
      imgUrl
    }
    total
  }
}
`
import {gql} from '@apollo/client';

export const SIGNUP_USER = gql `
mutation signUp($input: SignUpInput!) {
    signUp(signUpInput: $input) {
      user {
        name
        username
        email
      }
      token: jwt
    }
  }
`

export const LOGIN_USER = gql`
mutation signUp($input: SignInInput!) {
    signIn(signInInput: $input) {
      token: jwt
    }
  }
`
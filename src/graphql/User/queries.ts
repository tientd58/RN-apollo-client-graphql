import gql from 'graphql-tag';
import { USER_FRAGMENT } from './fragments';

export const LOGIN_MUTATION = gql`
  mutation loginMutation($emailAddress: String!, $password: String!) {
    login(emailAddress: $emailAddress, password: $password) {
      token
      user {
        ...userFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;
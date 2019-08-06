import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
  fragment userFragment on User {
    id
    profile {
      firstName
      lastName
    }
  }
`;
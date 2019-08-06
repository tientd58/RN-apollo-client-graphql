import gql from 'graphql-tag';

export const CHILD_PRAGMENT = gql`
  fragment childFragment on Rate {
    term
    rate {
      float
      display
      currency
    }
    payment {
      float
      display
      currency
    }
  }
`;
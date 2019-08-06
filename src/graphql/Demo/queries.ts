import gql from 'graphql-tag';
import { CHILD_PRAGMENT } from './fragments';

export const DEMO_QUERY = gql`
  query getListDemo($input: QuoteQueryInput!) {
    quote(input: $input) {
      generatedDate
      programs {
        name
        rates {
          ...childFragment
        }
      }
    }
  }
  ${CHILD_PRAGMENT}
`;
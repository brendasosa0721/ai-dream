import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;

export const QUERY_CREATION = gql`
  query Api($promptInput: String!) {
    api(promptInput: $promptInput) {
      data
    }
  }
`;


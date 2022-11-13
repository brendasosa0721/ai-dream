import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;



export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
      name
      description
      price
      quantity
      category {
        name
      } 
      }
    }
  }
`;

export const ADD_CREATION = gql`
  mutation addCreation($creationText: String!, $url: String!) {
    addCreation(creationText: $creationText, url: $url) {
      _id
      creationText
      url
      createdAt
      username
    }
  }
`;

export const REST_CREDITS = gql`
  mutation RestCredits($credits: Int!) {
    restCredits(credits: $credits) {
      _id
      username
      email
      credits
    }
  }
`;

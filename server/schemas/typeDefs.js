const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar JSON

type User {
  _id: ID
  username: String
  email: String
  totalCredits: Int
  creations: [Creation]
}

type Creation {
  _id: ID
  creationText: String
  url: String
  createdAt: String
  username: String
}

type Auth {
  token: ID!
  user: User
}

type Api {
  promptInput: String!
  data: JSON
}

type Query {
  me: User
  api(promptInput: String!): Api
  user(username: String!): User
  creation(_id: ID!): Creation 
  creations(username: String): [Creation]
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addCreation(creationText: String!, url: String!): Creation
}
`;

module.exports = typeDefs;

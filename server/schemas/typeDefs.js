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

type Category {
  _id: ID
  name: String
}

type Product {
  _id: ID
  name: String
  description: String
  image: String
  quantity: Int
  price: Float
  category: Category
}

type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
}

type Checkout {
  session: ID
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
  categories: Category
  product(_id: ID!): Product 
  products(category: ID!): Product 
  order(_id: ID!): Order 
  checkout(products: [ID]!): Checkout



}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addCreation(creationText: String!, url: String!): Creation
}
`;

module.exports = typeDefs;

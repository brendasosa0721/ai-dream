const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar JSON

  type User {
    _id: ID
    username: String
    email: String
    credits: Int
    creations: [Creation]
    orders: [Order]
  }

  type Creation {
    _id: ID
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
    user: User
    purchaseDate: String
    products: [Product]
    sessionId: String
    status: String
  }

  type Checkout {
    session: ID
  }

  type Api {
    promptInput: String!
    data: JSON
  }

  type BusinessCategory {
    _id: ID
    name: String
  }

  type BusinessType {
    _id: ID
    title: String!
    businessCategory: [BusinessCategory]
  }

  type Query {
    me: User
    api(promptInput: String!): Api
    user(username: String!): User
    creation(_id: ID!): Creation
    creations(username: String): [Creation]
    categories: [Category]
    product(_id: ID!): Product
    products: [Product]
    order(_id: ID!): Order
    orders: Order
    checkout(products: [ID]!): Checkout
    businessCategories: [BusinessCategory]
    businessTypes(businessCategory: ID!): [BusinessType]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCredits(sessionId: String!): User
    restCredits(credits: Int!): User
    addCreation(creationUrl: String!): Creation
    addOrder(products: [ID]!): Order
    updateOrder(_id: ID!, sessionId: String, status: String): Order
    updateProduct(_id: ID!, quantity: Int!): Product
    addBusinessCategory(name: String!): BusinessCategory
    addBusinessType(title: String!, BusinessCategory: ID!): BusinessType
  }
`;

module.exports = typeDefs;

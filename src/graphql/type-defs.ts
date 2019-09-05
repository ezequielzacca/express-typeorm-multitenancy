import { gql } from "apollo-server-express";
import { IBook } from "../models/interfaces/book.interface";

export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    id: ID!
    title: String!
    author: String!
    genreId: ID!
    genre: Genre!
  }

  type Genre {
    id: ID!
    name: String!
    books: [Book!]!
  }

  input BookInput {
    title: String!
    author: String!
    genreId: ID!
  }

  input GenreInput {
    name: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    genres: [Genre]
  }

  type Mutation {
    createBook(book: BookInput): Book!
    createGenre(genre: GenreInput): Genre!
  }
`;

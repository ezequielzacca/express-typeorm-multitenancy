import { Book } from "../models/book.model";
import { Genre } from "../models/genre.model";
import { Author } from "../models/author.model";

import { IGenre } from "../models/interfaces/genre.interface";
import { IBook } from "../models/interfaces/book.interface";
import { IAuthor } from "../models/interfaces/author.interface";

export const resolvers = {
  Query: {
    books: async () => Book.find(),
    genres: async () => Genre.find(),
    authors: async () => Author.find()
  },
  Genre: {
    books: (parent: IGenre) =>
      Book.find({
        genreId: parent.id
      })
  },
  Author: {
    books: (parent: IGenre) =>
      Book.find({
        authorId: parent.id
      })
  },
  Book: {
    genre: (parent: IBook) => Genre.findById(parent.genreId),
    author: (parent: IBook) => Author.findById(parent.authorId)
  },
  Mutation: {
    createBook: (_: any, { book }: { book: IBook }) => {
      const created = Object.assign(new Book(), book);
      return created.save();
    },
    createGenre: (_: any, { genre }: { genre: IGenre }) => {
      const created = Object.assign(new Genre(), genre);
      return created.save();
    },
    createAuthor: (_: any, { author }: { author: IAuthor }) => {
      const created = Object.assign(new Author(), author);
      return created.save();
    }
  }
};

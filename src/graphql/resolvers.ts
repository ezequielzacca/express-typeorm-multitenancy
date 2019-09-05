import { Book } from "../models/book.model";
import { Genre } from "../models/genre.model";

import { IGenre } from "../models/interfaces/genre.interface";
import { IBook } from "../models/interfaces/book.interface";

export const resolvers = {
  Query: {
    books: async () => Book.find(),
    genres: async () => Genre.find()
  },
  Genre: {
    books: (parent: IGenre) =>
      Book.find({
        genreId: parent.id
      })
  },
  Book: {
    genre: (parent: IBook) => Genre.findById(parent.genreId)
  },
  Mutation: {
    createBook: (_: any, { book }: { book: IBook }) => {
      const created = Object.assign(new Book(), book);
      return created.save();
    },
    createGenre: (_: any, { genre }: { genre: IGenre }) => {
      const created = Object.assign(new Genre(), genre);
      return created.save();
    }
  }
};

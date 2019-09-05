import { bookResolvers } from './../resolvers/book.resolvers';
import { authorResolvers } from './../resolvers/author.resolvers';
import { genreResolvers } from './../resolvers/genre.resolvers';

export const resolvers = {
  Query: {
    books: bookResolvers.main,
    genres: genreResolvers.main,
    authors: authorResolvers.main
  },
  Genre: genreResolvers.relations,
  Author: authorResolvers.relations,
  Book: bookResolvers.relations,
  Mutation: {
    ...bookResolvers.mutations,
    ...genreResolvers.mutations,
    ...authorResolvers.mutations
  }
};

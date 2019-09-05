import { Author } from './../models/author.model';
import { Genre } from './../models/genre.model';
import { IEntityResolver } from './resolvers.interfaces';

import { IBook } from '../models/interfaces/book.interface';
import { Book } from '../models/book.model';

export const bookResolvers: IEntityResolver<IBook> = {
    main: async () => Book.find(),
    relations: {
        genre: (parent: IBook) => Genre.findById(parent.genreId),
        author: (parent: IBook) => Author.findById(parent.authorId)
    },
    mutations: {
        createBook: (_: any, { book }: { book: IBook }) => {
            const created = Object.assign(new Book(), book);
            return created.save();
        },
        updateBook: async (_: any, { id, book }: { id: string, book: Partial<IBook> }) => {
            const toUpdate = Object.assign(await Book.findById(id), book);
            return toUpdate.save();
        },
    }
}
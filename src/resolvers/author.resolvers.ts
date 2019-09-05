import { Author } from './../models/author.model';
import { IEntityResolver } from "./resolvers.interfaces";
import { Book } from "../models/book.model";
import { IAuthor } from '../models/interfaces/author.interface';

export const authorResolvers: IEntityResolver<IAuthor> = {
    main: async () => Author.find(),
    relations: {
        books: (parent: IAuthor) =>
            Book.find({
                authorId: parent.id
            }),
        numberOfBooks: (parent: IAuthor) =>
            Book.count({
                authorId: parent.id
            })
    },
    mutations: {
        createAuthor: (_: any, { author }: { author: IAuthor }) => {
            const created = Object.assign(new Author(), author);
            return created.save();
        },
        updateAuthor: async (_: any, { id, author }: { id: string, author: Partial<IAuthor> }) => {
            const toUpdate = Object.assign(await Author.findById(id), author);
            return toUpdate.save();
        }
    }
}
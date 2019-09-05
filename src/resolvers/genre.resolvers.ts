import { IGenre } from './../models/interfaces/genre.interface';
import { IEntityResolver } from "./resolvers.interfaces";
import { Genre } from "../models/genre.model";
import { Book } from "../models/book.model";

export const genreResolvers: IEntityResolver<IGenre> = {
    main: async () => Genre.find(),
    relations: {
        books: (parent: IGenre) =>
            Book.find({
                genreId: parent.id
            }),
        numberOfBooks: (parent: IGenre) =>
            Book.count({
                genreId: parent.id
            })
    },
    mutations: {
        createGenre: (_: any, { genre }: { genre: IGenre }) => {
            const created = Object.assign(new Genre(), genre);
            return created.save();
        },
        updateGenre: async (_: any, { id, genre }: { id: string, genre: Partial<IGenre> }) => {
            const toUpdate = Object.assign(await Genre.findById(id), genre);
            return toUpdate.save();
        }
    }
}
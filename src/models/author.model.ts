import { IAuthor } from './interfaces/author.interface';
import mongoose from "mongoose";


export const AuthorSchema = new mongoose.Schema({
    name: String
});

export const Author = mongoose.model<IAuthor>("author", AuthorSchema, "authors");

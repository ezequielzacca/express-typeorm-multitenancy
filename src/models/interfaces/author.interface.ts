import { Document } from "mongoose";
import { IBook } from "./book.interface";

export interface IAuthor extends Document {
    name: string;
    books: IBook[]
}
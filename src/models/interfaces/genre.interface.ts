import { Document } from "mongoose";
import { IBook } from "./book.interface";

export interface IGenre extends Document {
  name: string;
  books: IBook[]
}

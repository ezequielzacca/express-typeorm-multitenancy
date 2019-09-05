import { Document } from "mongoose";

export interface IBook extends Document {
  genreId: string;
  title: string;
  author: string;
}

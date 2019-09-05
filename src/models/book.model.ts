import mongoose from "mongoose";
import { IBook } from "./interfaces/book.interface";

export const BookSchema = new mongoose.Schema({
  author: String,
  title: String,
  genreId: mongoose.Schema.Types.ObjectId
});

export const Book = mongoose.model<IBook>("Book", BookSchema);

import { IAuthor } from './author.interface';
import { Document } from "mongoose";
import { IGenre } from './genre.interface';

export interface IBook extends Document {
  genreId: string;
  title: string;
  author: IAuthor;
  genre: IGenre;
  authorId: string;

}

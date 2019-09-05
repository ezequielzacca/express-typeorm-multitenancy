import mongoose from "mongoose";
import { IGenre } from "./interfaces/genre.interface";

export const GenreSchema = new mongoose.Schema({
  name: String
});

export const Genre = mongoose.model<IGenre>("Genre", GenreSchema);

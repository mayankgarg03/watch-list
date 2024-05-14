
import mongoose from "mongoose";
const { Schema } = mongoose;

import { GENRES, CONTENT_TYPES } from '../utils/constant';

const episodeSchema = new Schema({
  episodeNumber: Number,
  seasonNumber: Number,
  releaseDate: Date,
  director: String,
  actors: [String],
});

const contentSchema = new Schema({
  type: { type: String, enum: CONTENT_TYPES, required: true },
  title: { type: String, required: true },
  description: String,
  genres: [{ type: String, enum: GENRES }],
  releaseDate: Date,
  director: String,
  actors: [String],
  episodes: [episodeSchema],
});

export const ContentModel = mongoose.model('Content', contentSchema);

import mongoose, { Schema, Document, Types } from 'mongoose';
import { GENRES } from '../utils/constant';


export interface IWatchList {
  contentId: Types.ObjectId;
  addedOn: Date;
}

interface IUser extends Document {
  username: string;
  preferences: {
    favoriteGenres: string[];
    dislikedGenres: string[];
  };
  watchHistory: {
    contentId: Types.ObjectId;
    watchedOn: Date;
    rating?: number;
  }[];
  watchList: IWatchList[];
}

const watchListSchema = new Schema<IWatchList>({
  contentId: { type: Schema.Types.ObjectId, ref: 'Content', required: true },
  addedOn: { type: Date, default: Date.now },
});

// Define the schema for User
const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  preferences: {
    favoriteGenres: [{ type: String, enum: GENRES }],
    dislikedGenres: [{ type: String, enum: GENRES }],
  },
  watchHistory: [
    {
      contentId: { type: Schema.Types.ObjectId, ref: 'Content' },
      watchedOn: Date,
      rating: Number,
    },
  ],
  watchList: [watchListSchema],
});

export const UserModel = mongoose.model<IUser>('User', userSchema);

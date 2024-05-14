import { ContentModel } from '../models'; 
import dotenv from 'dotenv';
dotenv.config();
import connectDB from '../utils/db';

connectDB();

const dummyEpisodes = [
  {
    episodeNumber: 1,
    seasonNumber: 1,
    releaseDate: new Date('2024-05-01'),
    director: 'Director 1',
    actors: ['Actor 1', 'Actor 2'],
  },
  {
    episodeNumber: 2,
    seasonNumber: 1,
    releaseDate: new Date('2024-05-08'),
    director: 'Director 2',
    actors: ['Actor 3', 'Actor 4'],
  },
];

const dummyContent = [
  {
    type: 'tvshow',
    title: 'TV Show 1',
    description: 'Description of TV Show 1',
    genres: ['Action', 'Drama'],
    releaseDate: new Date('2024-05-01'),
    director: 'Director 1',
    actors: ['Actor 1', 'Actor 2'],
    episodes: dummyEpisodes,
  },
  {
    type: 'movie',
    title: 'Movie 1',
    description: 'Description of Movie 1',
    genres: ['Comedy'],
    releaseDate: new Date('2024-05-15'),
    director: 'Director 2',
    actors: ['Actor 3', 'Actor 4'],
  },
];

async function saveDummyContent() {
  try {
    await ContentModel.deleteMany({});

    await ContentModel.insertMany(dummyContent);

    console.log('Dummy content saved successfully!');
  } catch (error) {
    console.error('Error saving dummy content:', error);
  }
}

saveDummyContent();

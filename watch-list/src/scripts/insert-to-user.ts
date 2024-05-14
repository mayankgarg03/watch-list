import dotenv from 'dotenv';
dotenv.config();
import { UserModel } from '../models';
import connectDB from '../utils/db';
// Dummy data

connectDB();
const dummyUsers = [
  {
    username: 'user1',
    preferences: {
      favoriteGenres: ['Action', 'Comedy'],
      dislikedGenres: ['Horror'],
    },
    watchHistory: [
      
    ],
    watchList: [
     
    ],
  },
 
];

async function saveDummyUsers() {
  try {
    
    await UserModel.deleteMany({});

    await UserModel.insertMany(dummyUsers);

    console.log('Dummy users saved successfully!');
  } catch (error) {
    console.error('Error saving dummy users:', error);
  }
}

saveDummyUsers();

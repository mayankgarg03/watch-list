import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './utils/db';

import watchListRoutes from './routes/watch-list.routes';


const app = express();
const PORT = process.env.PORT || 3000;


connectDB();

app.use(bodyParser.json());

app.use('/api/watch-list', watchListRoutes);


app.listen(PORT, () => {
    console.log('WatchList Server Started');
});

export default app;
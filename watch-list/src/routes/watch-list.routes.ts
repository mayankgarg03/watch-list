import express from 'express';

import { addToWatchlist, getWatchlist, removeFromWatchlist } from '../controllers/watch-list.controllers';

const router = express.Router();

router.post('/:userId/:contentId', async (req, res): Promise<any> => {
  const { userId, contentId }: { userId: string, contentId: string } = req.params;

  try {
    const response = await addToWatchlist(userId, contentId);
    res.status(201).json(response);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Error adding to watch list', error });
  }
});


router.delete('/:userId/:contentId', async (req, res): Promise<any> => {
  const { userId, contentId } = req.params;

  try {
    const response = await removeFromWatchlist(userId, contentId);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Error removing from watch list', error });
  }
});


router.get('/:userId', async (req, res): Promise<any> => {
  const { userId } = req.params;
  let { page, pageSize } = req.query;

  if (!page) {
    page = '1';
  }
  if (!pageSize) {
    pageSize = '10';
  }

  try {
    const response = await getWatchlist(userId, +page, +pageSize);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Error retrieving watch list', error });
  }
});


export default router;

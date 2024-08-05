import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// gets token to send username
router.get('/token', async (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ message: 'Error: token not found' });
  };
  
  try {
    const user = await prisma.user.findUnique({
      where: {
        token: token as string,
      },
      select: {
        username: true,
      },
    });

    res.status(200).json({ user, message: 'User found via token' });

  } catch (error) {
    res.status(500).json({ message: 'Error: ', error });
  }
});

router.get('/getTweets', async (req, res) => {
  try {
    const tweets = await prisma.tweet.findMany({
      select: {
        username: true,
        content: true,
        likes: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    });

    res.status(200).json({ tweets, message: 'Tweets retrieved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving tweets' });
  }
});

router.post('/writeTweet', async (req, res) => {
  const { username, content } = req.body;

  if (!username || !content) {
    return res.status(400).json({ message: 'Please provide all the required fields' });
  }

  try {
    const tweet = await prisma.tweet.create({
      data: {
        username: username,
        content: content,
      },
    })

    res.status(201).json({ tweet, message: 'Tweet created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the tweet' });
  }
});

export default router
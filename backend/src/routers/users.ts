import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide all the required fields' })
  }

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password:password,
      },
    })
  
    res.status(201).json({ user, message: 'User created successfully' })
  } catch (error) {
    return res.status(500).json({ error, message: 'Error creating user' })
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide all the required fields' })
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
        password: password,
      },
    })
  
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }
  
    res.status(200).json({ token: user.token, user, message: 'User logged in successfully' })
  } catch (error) {
    return res.status(500).json({ error, message: 'Error logging in user' })
  }
})

export default router
import express from 'express'
import cors from 'cors'
import usersRouter from './routers/users'
import tweetsRouter from './routers/tweets'

const server = express()
server.use(express.json())
server.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, PATCH, DELETE, ',
}))

server.use('/api/routers/users', usersRouter)
server.use('/api/routers/tweets', tweetsRouter)

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
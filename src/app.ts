import express, { Application } from 'express'
import router from './app/routes'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import { notFound } from './app/middlewares/notFound'

// creating app
const app: Application = express()

// cors
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://www.devjunayed.xyz',
      'https://devjunayed.xyz',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers',
    ],
  }),
)

// middlewares for getting data from the frontend
app.use(express.json())

// tes route
app.get('/', (req, res) => {
  res.json({
    message: 'Server is running',
  })
})

// using routes
app.use('/api/v1/', router)

// global error handler
app.use(globalErrorHandler)

// api not found
app.use(notFound)

export default app

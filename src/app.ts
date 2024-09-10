import express, { Application } from 'express'
import router from './app/routes'
import cors from 'cors';

// creating app
const app: Application = express()

// cors
app.use(cors());

// using router
app.use(router);

export default app

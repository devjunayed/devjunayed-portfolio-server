import express from 'express'

const app = express()
app.get('/', (req, res) => {
  // const a = 5;
  res.send('server is running')
})
export default app

import express from 'express'
import cors from 'cors'

import routes from './routes'
import authorization from './middlewares/authorization'

const app = express()

app.use(cors())
app.use(authorization)
app.use(express.json())

app.get('/', (req, res) =>
  res.send({ message: 'Welcome to API', date: new Date() })
)
app.use('/api', routes)

export default app

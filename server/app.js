import express from 'express'
import cors from 'cors'

import { port } from './config.js'

const app = express()

app.set('port', port)

app.use(express.json())
app.use(cors())

export default app

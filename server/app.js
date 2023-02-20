import express from 'express'
import cors from 'cors'

import { port } from './config.js'

import upload from './utils/diskStorage.js'
import booksRoutes from './routes/books.routes.js'
import genresRoutes from './routes/genres.routes.js'
import authorsRoutes from './routes/authors.routes.js'

// Init
const app = express()

// Setting
app.set('port', port)

// MiddleWares
app.use(express.json())
app.use(cors())
app.use(upload)

// Routes
app.use('/api', booksRoutes)
app.use('/api', genresRoutes)
app.use('/api', authorsRoutes)

export default app

import { Router } from 'express'
import {
  delBooks,
  getBook,
  getBookAuthors,
  getBookGenres,
  getBooks,
  postBooks,
  putBooks,
} from '../controllers/books.controller.js'

const router = Router()

router.get('/books/:id', getBook)
router.get('/books/:id/authors', getBookAuthors)
router.get('/books/:id/genres', getBookGenres)
router.get('/books/', getBooks)
router.post('/books/', postBooks)
router.put('/books/:id', putBooks)
router.delete('/books/:id', delBooks)

export default router

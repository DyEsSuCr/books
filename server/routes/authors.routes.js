import { Router } from 'express'
import {
  delAuthors,
  getAuthor,
  getAuthors,
  postAuthors,
  putAuthors,
} from '../controllers/authors.controller.js'

const router = Router()

router.get('/authors/:id', getAuthor)
router.get('/authors/', getAuthors)
router.post('/authors/', postAuthors)
router.put('/authors/:id', putAuthors)
router.delete('/authors/:id', delAuthors)

export default router

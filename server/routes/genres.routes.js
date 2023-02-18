import { Router } from 'express'
import { validateCreate } from '../validators/genres.js'
import { delGenres, getGenre, getGenres, postGenres, putGenres } from '../controllers/genres.controller.js'

const router = Router()

router.get('/genres/:id', getGenre)
router.get('/genres/', getGenres)
router.post('/genres/', validateCreate, postGenres)
router.put('/genres/:id', putGenres)
router.delete('/genres/:id', delGenres)

export default router

import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js'

export const validateCreate = [
  check('name').exists().not().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]

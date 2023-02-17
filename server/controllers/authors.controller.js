import { Authors } from '../models/Authors.js'

export const getAuthor = async (req, res) => {
  res.json({ messaje: 'GET Author' })
}

export const getAuthors = async (req, res) => {
  res.json({ messaje: 'GET Authors' })
}

export const postAuthors = async (req, res) => {
  res.json({ messaje: 'POST Authors' })
}

export const putAuthors = async (req, res) => {
  res.json({ messaje: 'PUT Authors' })
}

export const delAuthors = async (req, res) => {
  res.json({ messaje: 'DELETE Authors' })
}

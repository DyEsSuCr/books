import { Books } from '../models/Books.js'

export const getBook = async (req, res) => {
  res.json({ messaje: 'GET Book' })
}

export const getBooks = async (req, res) => {
  res.json({ messaje: 'GET Books' })
}

export const postBooks = async (req, res) => {
  res.json({ messaje: 'POST Books' })
}

export const putBooks = async (req, res) => {
  res.json({ messaje: 'PUT Books' })
}

export const delBooks = async (req, res) => {
  res.json({ messaje: 'DELETE Books' })
}

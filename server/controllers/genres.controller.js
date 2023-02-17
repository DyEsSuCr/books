import { Genres } from '../models/Genres.js'

export const getGenre = async (req, res) => {
  res.json({ messaje: 'GET Genre' })
}

export const getGenres = async (req, res) => {
  res.json({ messaje: 'GET Genres' })
}

export const postGenres = async (req, res) => {
  res.json({ messaje: 'POST Genres' })
}

export const putGenres = async (req, res) => {
  res.json({ messaje: 'PUT Genres' })
}

export const delGenres = async (req, res) => {
  res.json({ messaje: 'DELETE Genres' })
}

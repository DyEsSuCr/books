import { Genres } from '../models/Genres.js'

export const getGenre = async (req, res) => {
  res.json({ messaje: 'GET Genre' })
}

export const getGenres = async (req, res) => {
  const genres = await Genres.findAll({
    where: {
      state: true,
    },
  })

  if (genres.length <= 0) return res.status(200).json({ messaje: 'No hay generos' })

  res.status(200).json(genres)
}

export const postGenres = async (req, res) => {
  const { name } = req.body

  const newGenre = await Genres.create({
    name,
  })

  res.status(201).json(newGenre)
}

export const putGenres = async (req, res) => {
  res.json({ messaje: 'PUT Genres' })
}

export const delGenres = async (req, res) => {
  const { id } = req.params

  const genre = await Genres.findByPk(id)

  genre.state = false

  await genre.save()

  res.status(200).json({ messaje: 'Eliminado' })
}

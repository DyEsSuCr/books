import { Genres } from '../models/Genres.js'

export const getGenre = async (req, res) => {
  const { id } = req.params

  const genre = await Genres.findOne({
    where: {
      id,
    },
    attributes: ['id', 'name', 'createdAt', 'updatedAt'],
  })

  res.status(200).json(genre)
}

export const getGenres = async (req, res) => {
  const genres = await Genres.findAll({
    where: {
      state: true,
    },
    attributes: ['id', 'name', 'createdAt', 'updatedAt'],
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
  const { id } = req.params
  const { name } = req.body

  const genreUpdate = await Genres.findOne({
    where: {
      id,
    },
    attributes: ['id', 'name', 'createdAt', 'updatedAt'],
  })

  genreUpdate.name = name

  await genreUpdate.save()

  res.status(200).json(genreUpdate)
}

export const delGenres = async (req, res) => {
  const { id } = req.params

  const genre = await Genres.findByPk(id)

  genre.state = false

  await genre.save()

  res.status(200).json({ messaje: 'Eliminado' })
}

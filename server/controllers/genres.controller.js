import { Genres } from '../models/Genres.js'

export const getGenre = async (req, res) => {
  const { id } = req.params

  try {
    const genre = await Genres.findOne({
      where: {
        id,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    res.status(200).json(genre)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const getGenres = async (req, res) => {
  try {
    const genres = await Genres.findAll({
      where: {
        state: true,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    if (genres.length <= 0) return res.status(200).json({ messaje: 'No hay generos' })

    res.status(200).json(genres)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const postGenres = async (req, res) => {
  const { name } = req.body

  try {
    const genre = await Genres.create({
      name,
    })

    const id = genre.id

    const newGenre = await Genres.findAll({
      where: {
        id,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    res.status(201).json(newGenre)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const putGenres = async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  try {
    const genreUpdate = await Genres.findOne({
      where: {
        id,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    genreUpdate.name = name

    await genreUpdate.save()

    res.status(200).json(genreUpdate)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const delGenres = async (req, res) => {
  const { id } = req.params

  try {
    const genre = await Genres.findByPk(id)

    genre.state = false

    await genre.save()

    res.status(200).json({ messaje: 'Eliminado' })
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

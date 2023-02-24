import { Genres } from '../models/Genres.js'

export const getGenre = async (req, res) => {
  try {
    const getOneGenre = await Genres.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    res.status(200).json(getOneGenre)
  } catch (err) {
    res.status(404).json({ messaje: 'Genre Not Found', error: err })
  }
}

export const getGenres = async (req, res) => {
  try {
    const getAllGenres = await Genres.findAll({
      where: {
        state: true,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    if (getAllGenres.length <= 0) return res.status(200).json({ messaje: 'No hay generos' })

    res.status(200).json(getAllGenres)
  } catch (err) {
    res.status(404).json({ messaje: 'Genres Not Found', error: err })
  }
}

export const postGenres = async (req, res) => {
  const { name } = req.body

  try {
    const alReadyExistsGenre = await Genres.findOne({
      where: {
        name,
      },
    })

    if (alReadyExistsGenre) return res.status(200).json({ messaje: 'Genre already exists' })

    const newGenre = await Genres.create({
      name,
    })

    const genreNew = await Genres.findByPk(newGenre.id, {
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    res.status(201).json(genreNew)
  } catch (err) {
    res.status(404).json({ messaje: 'No created', error: err })
  }
}

export const putGenres = async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  try {
    const existsGenre = await Genres.findOne({
      where: {
        name,
      },
    })

    if (existsGenre) return res.status(200).json({ messaje: 'Genre already exists' })

    const genreUpdate = await Genres.findByPk(id, {
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
  try {
    const delGenre = await Genres.findByPk(req.params.id)

    delGenre.state = false

    await delGenre.save()

    res.status(200).json({ messale: 'Genre Deleted' })
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

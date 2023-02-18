import { Authors } from '../models/Authors.js'

export const getAuthor = async (req, res) => {
  const { id } = req.params

  try {
    const authors = await Authors.findOne({
      where: {
        id,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    res.status(200).json(authors)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const getAuthors = async (req, res) => {
  try {
    const author = await Authors.findAll({
      where: {
        state: true,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    if (author.length <= 0) return res.status(200).json({ messaje: 'No hay Autores' })

    res.status(200).json(author)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const postAuthors = async (req, res) => {
  const { name } = req.body

  try {
    const author = await Authors.create({
      name,
    })

    const id = author.id

    const newAuthor = await Authors.findAll({
      where: {
        id,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    res.status(201).json(newAuthor)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const putAuthors = async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  try {
    const authorUpdate = await Authors.findOne({
      where: {
        id,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    authorUpdate.name = name

    await authorUpdate.save()

    res.status(200).json(authorUpdate)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const delAuthors = async (req, res) => {
  const { id } = req.params

  try {
    const author = await Authors.findByPk(id)

    author.state = false

    await author.save()

    res.status(200).json({ messaje: 'Eliminado' })
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

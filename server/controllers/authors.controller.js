import { Authors } from '../models/Authors.js'

export const getAuthor = async (req, res) => {
  try {
    const getOneAuthor = await Authors.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    res.status(200).json(getOneAuthor)
  } catch (err) {
    res.status(404).json({ messaje: 'Author Not Found', error: err })
  }
}

export const getAuthors = async (req, res) => {
  try {
    const getAllAuthor = await Authors.findAll({
      where: {
        state: true,
      },
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    if (getAllAuthor.length <= 0) return res.status(200).json({ messaje: 'No hay Autores' })

    res.status(200).json(getAllAuthor)
  } catch (err) {
    res.status(404).json({ messaje: 'Authors Not Found', error: err })
  }
}

export const postAuthors = async (req, res) => {
  const { name } = req.body

  try {
    const alReadyExistsAuthor = await Authors.findOne({
      where: {
        name,
      },
    })

    if (alReadyExistsAuthor) return res.status(200).json({ messaje: 'Author already exists' })

    const newAuthor = await Authors.create({
      name,
    })

    const authorNew = await Authors.findByPk(newAuthor.id, {
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
    })

    res.status(201).json(authorNew)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const putAuthors = async (req, res) => {
  const { name } = req.body

  try {
    const alReadyExistsAuthor = await Authors.findOne({
      where: {
        name,
      },
    })

    if (alReadyExistsAuthor) return res.status(200).json({ messaje: 'Author already exists' })

    const authorUpdate = await Authors.findByPk(req.params.id, {
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
  try {
    const delAuthor = await Authors.findByPk(req.params.id)

    delAuthor.state = false

    await delAuthor.save()

    res.status(200).json({ messaje: 'Author Deleted' })
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

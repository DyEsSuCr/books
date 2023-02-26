import { Books } from '../models/Books.js'
import { Authors } from '../models/Authors.js'
import { Genres } from '../models/Genres.js'

export const getBookAuthors = async (req, res) => {
  try {
    const bookAuthor = await Books.findByPk(req.params.id)

    const result = await bookAuthor.getAuthors({
      attributes: {
        exclude: ['state', 'createdAt', 'updatedAt'],
      },
    })

    res.status(200).json(result)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const getBookGenres = async (req, res) => {
  try {
    const boookGenres = await Books.findByPk(req.params.id)

    const result = await boookGenres.getGenres({
      attributes: {
        exclude: ['state', 'createdAt', 'updatedAt'],
      },
    })

    res.status(200).json(result)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const getBook = async (req, res) => {
  try {
    const getOneBook = await Books.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ['state'],
      },
    })

    if (getOneBook.length <= 0) return res.status(200).json({ messaje: 'Book not found' })

    res.status(200).json(getOneBook)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const getBooks = async (req, res) => {
  try {
    const getAllBooks = await Books.findAll({
      where: {
        state: true,
      },
      attributes: {
        exclude: ['state'],
      },
    })

    res.status(200).json(getAllBooks)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const postBooks = async (req, res) => {
  const { tittle, subtitle, genres, authors } = req.body

  try {
    const allGenres = await Genres.findAll({
      where: {
        name: genres,
      },
    })

    const allAuthor = await Authors.findAll({
      where: {
        name: authors,
      },
    })

    const newBook = await Books.create({
      tittle,
      subtitle,
      image: `http://localhost:3000/images/${req.file.filename}`,
    })

    await newBook.setGenres(allGenres)
    await newBook.setAuthors(allAuthor)

    res.json(newBook)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const putBooks = async (req, res) => {
  const { image, tittle, subtitle, publiched_date, favorite } = req.body

  console.log({
    image,
    tittle,
    subtitle,
    publiched_date,
    favorite,
  })

  res.json({ messaje: 'PUT Books' })
}

export const delBooks = async (req, res) => {
  try {
    const delBook = await Books.findByPk(req.params.id)

    delBook.state = false

    await delBook.save()

    res.status(200).json({ messaje: 'Book Deleted' })
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

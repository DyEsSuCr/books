import { Authors } from './Authors.js'
import { Books } from './Books.js'
import { Genres } from './Genres.js'

Authors.belongsToMany(Books, {
  through: 'authors_books',
  timestamps: false,
})

Genres.belongsToMany(Books, {
  through: 'genres_books',
  timestamps: false,
})

Books.belongsToMany(Authors, {
  through: 'authors_books',
  timestamps: false,
})

Books.belongsToMany(Genres, {
  through: 'genres_books',
  timestamps: false,
})

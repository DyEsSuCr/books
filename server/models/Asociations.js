import { Authors } from './Authors.js'
import { Books } from './Books.js'
import { Genres } from './Genres.js'

// Block: Asocitation (ManyToMany) Authors

Books.belongsToMany(Authors, {
  through: 'authors_books',
  timestamps: false,
})

Authors.belongsToMany(Books, {
  through: 'authors_books',
  timestamps: false,
})

// Block: Asocitation (ManyToMany) Genres

Books.belongsToMany(Genres, {
  through: 'genres_books',
  timestamps: false,
})

Genres.belongsToMany(Books, {
  through: 'genres_books',
  timestamps: false,
})

// Block: Asocitation (OneToMany) Authors

Books.hasMany(Authors, {
  foreignKey: 'bookId',
  sourceKey: 'id',
})

Authors.belongsTo(Books, {
  foreignKey: 'bookId',
  sourceKey: 'id',
})

Books.belongsTo(Authors, {
  foreignKey: 'authorId',
  sourceKey: 'id',
})

Authors.hasMany(Books, {
  foreignKey: 'authorId',
  sourceKey: 'id',
})

// Block: Asocitation (OneToMany) Genres

Books.hasMany(Genres, {
  foreignKey: 'bookId',
  sourceKey: 'id',
})

Genres.belongsTo(Books, {
  foreignKey: 'bookId',
  sourceKey: 'id',
})

Books.belongsTo(Genres, {
  foreignKey: 'genreId',
  sourceKey: 'id',
})

Genres.hasMany(Books, {
  foreignKey: 'genreId',
  sourceKey: 'id',
})

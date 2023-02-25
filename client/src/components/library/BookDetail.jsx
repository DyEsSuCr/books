import { useLoaderData, Link } from 'react-router-dom'

export function BookDetail() {
  const { book, genres, authors } = useLoaderData()

  return (
    <>
      <div key={book.id}>
        <Link>{book.tittle}</Link>
        <p>{book.subtitle}</p>
        <img className="max-w-lg" src={book.image} alt={book.tittle} />
        <h2 className="font-bold">Genres</h2>
        <div className="flex gap-4">
          {genres.map((genre) => {
            return <span key={genre.id}>{genre.name}</span>
          })}
        </div>
        <h2 className="font-bold">Authors</h2>
        <div className="flex gap-4">
          {authors.map((author) => {
            return <span key={author.id}>{author.name}</span>
          })}
        </div>
      </div>
    </>
  )
}

export async function loaderBookDetail({ params }) {
  const resBook = await fetch(`http://localhost:3000/api/books/${params.id}`)
  const book = await resBook.json()

  const resGenres = await fetch(`http://localhost:3000/api/books/${book.id}/genres`)
  const genres = await resGenres.json()

  const resAuthor = await fetch(`http://localhost:3000/api/books/${book.id}/authors`)
  const authors = await resAuthor.json()

  return { book, genres, authors }
}

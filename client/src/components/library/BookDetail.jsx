import { useLoaderData, Link } from 'react-router-dom'

export function BookDetail() {
  const { book, genres } = useLoaderData()

  return (
    <>
      <div key={book.id}>
        <Link>{book.tittle}</Link>
        <p>{book.subtitle}</p>
        <img className="max-w-lg" src={book.image} alt={book.tittle} />
        {genres.map((genre) => {
          return (
            <div key={genre.id}>
              <span>{genre.name}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function loaderBookDetail({ params }) {
  const resBook = await fetch(`http://localhost:3000/api/books/${params.id}`)
  const book = await resBook.json()

  const resGenres = await fetch(`http://localhost:3000/api/books/${book.id}/genres`)
  const genres = await resGenres.json()

  return { book, genres }
}

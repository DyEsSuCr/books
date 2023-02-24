import { useLoaderData, Link } from 'react-router-dom'

export function BookDetail() {
  const { book } = useLoaderData()

  return (
    <>
      <div key={book.id}>
        <Link>{book.tittle}</Link>
        <p>{book.subtitle}</p>
        <img className="max-w-lg" src={book.image} alt={book.tittle} />
        {book.genres.map((genre) => (
          <span className="gap-2" key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
    </>
  )
}

export async function loaderBookDetail({ params }) {
  const res = await fetch(`http://localhost:3000/api/books/${params.id}`)
  const book = await res.json()

  return { book }
}

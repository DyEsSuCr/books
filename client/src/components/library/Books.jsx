import { Book } from './Book'

export function Books({ books }) {
  return (
    <>
      {books.length > 0
        ? books.map((book) => {
            return <Book key={book.id} book={book} />
          })
        : 'cargando'}
    </>
  )
}

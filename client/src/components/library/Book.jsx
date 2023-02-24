import { Link } from 'react-router-dom'

export function Book({ book }) {
  return (
    <div key={book.id}>
      <Link to={`/book/${book.id}`}>{book.tittle}</Link>
      <p>{book.subtitle}</p>
      <img className="max-w-lg" src={book.image} alt={book.tittle} />
    </div>
  )
}

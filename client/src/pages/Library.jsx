import { useContext } from 'react'

import { Books } from '../components/library/Books'
import { BookContext } from '../context/BooksContext'

export function Library() {
  const { books } = useContext(BookContext)

  return (
    <>
      <h1 className="text-center text-3xl font-semibold py-8">Library</h1>
      <Books books={books} />
    </>
  )
}

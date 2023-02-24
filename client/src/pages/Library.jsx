import { useState, useEffect } from 'react'
import { Books } from '../components/library/Books'

export function Library() {
  const [books, setBooks] = useState([])

  const ApiFetch = async (url) => {
    const res = await fetch(url)
    const books = await res.json()

    setBooks(books)
  }

  useEffect(() => {
    ApiFetch('http://localhost:3000/api/books/')
  }, [])

  const createBook = () => {}

  const updateBook = () => {}

  const deleteBook = () => {}

  return (
    <>
      <h1 className="text-center text-3xl font-semibold py-8">Library</h1>
      <Books books={books} />
    </>
  )
}

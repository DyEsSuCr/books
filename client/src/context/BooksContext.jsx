import { useEffect, useState, createContext } from 'react'

export const BookContext = createContext()

export const BoookProvider = ({ children }) => {
  const [books, setbooks] = useState([])

  const apiBooks = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbooks(data))
  }

  useEffect(() => {
    apiBooks('http://localhost:3000/api/books/')
  }, [])

  return <BookContext.Provider value={{ books, setbooks }}>{children}</BookContext.Provider>
}

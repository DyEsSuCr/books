import { useEffect, useState, createContext } from 'react'

export const BookContext = createContext()

export const BoookProvider = ({ children }) => {
  const [data, setData] = useState([])

  const apiBooks = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }

  useEffect(() => {
    apiBooks('http://localhost:3000/api/books/')
  }, [])

  return <BookContext.Provider value={{ data, setData }}>{children}</BookContext.Provider>
}

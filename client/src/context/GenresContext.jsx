import { useEffect, useState, createContext } from 'react'

export const GenresContext = createContext()

export const GenresProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [genres, setGenres] = useState([])

  const apiGenres = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGenres(data))
  }

  useEffect(() => {
    apiGenres('http://localhost:3000/api/genres/')
  }, [])

  return <GenresContext.Provider value={{ genres, setGenres }}>{children}</GenresContext.Provider>
}

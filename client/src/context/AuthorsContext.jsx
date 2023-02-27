import { useEffect, useState, createContext } from 'react'

export const AuthorsContext = createContext()

export const AuthorsProvider = ({ children }) => {
  const [authors, setAuthors] = useState([])

  const apiAuthors = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAuthors(data))
  }

  useEffect(() => {
    apiAuthors('http://localhost:3000/api/authors/')
  }, [])

  return <AuthorsContext.Provider value={{ authors, setAuthors }}>{children}</AuthorsContext.Provider>
}

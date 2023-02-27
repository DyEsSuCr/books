import { useEffect, useState, createContext } from 'react'

export const AuthorsContext = createContext()

export const AuthorsProvider = ({ children }) => {
  const [data, setData] = useState([])

  const apiAuthors = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }

  useEffect(() => {
    apiAuthors('http://localhost:3000/api/authors/')
  }, [])

  return <AuthorsContext.Provider value={{ data, setData }}>{children}</AuthorsContext.Provider>
}

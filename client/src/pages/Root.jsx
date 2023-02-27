import { Outlet } from 'react-router-dom'

import { NavBar } from '../components/Portals/NavBar'
import { BoookProvider } from '../context/BooksContext'
import { AuthorsProvider } from '../context/AuthorsContext'
import { GenresProvider } from '../context/GenresContext'

export function Root() {
  return (
    <>
      <main>
        <BoookProvider>
          <AuthorsProvider>
            <GenresProvider>
              <NavBar />
              <Outlet />
            </GenresProvider>
          </AuthorsProvider>
        </BoookProvider>
      </main>
    </>
  )
}

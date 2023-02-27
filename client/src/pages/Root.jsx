import { Outlet } from 'react-router-dom'

import { NavBar } from '../components/Portals/NavBar'
import { BoookProvider } from '../context/BooksContext'

export function Root() {
  return (
    <>
      <main>
        <BoookProvider>
          <NavBar />
          <Outlet />
        </BoookProvider>
      </main>
    </>
  )
}

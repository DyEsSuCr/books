import { Outlet } from 'react-router-dom'

import { NavBar } from '../components/Portals/NavBar'

export function Root() {
  return (
    <>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </>
  )
}

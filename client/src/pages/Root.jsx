import { Outlet } from 'react-router-dom'

export function Root() {
  return (
    <>
      <main>
        <h1 className="text-indigo-400">Biblioteca</h1>
        <Outlet />
      </main>
    </>
  )
}

import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <div className="flex gap-4">
      <NavLink to={'/'} className="text-indigo-500">
        Library
      </NavLink>
    </div>
  )
}

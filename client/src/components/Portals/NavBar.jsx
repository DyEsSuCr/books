import { NavLink } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { FormBooks } from './FormBook'

export function NavBar() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex gap-4">
      <NavLink to={'/'} className="text-indigo-500">
        Library
      </NavLink>
      <button onClick={() => setVisible(!visible)}>Create Book</button>
      {visible && createPortal(<FormBooks />, document.getElementById('bookForm'))}
    </div>
  )
}

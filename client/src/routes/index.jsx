import { createBrowserRouter } from 'react-router-dom'

import { Biblioteca } from '../pages/Blibli'
import { Error } from '../routes/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Biblioteca />,
    errorElement: <Error />,
  },
  {
    path: '/genres',
    element: <h1>genres</h1>,
  },
  {
    path: '/authors',
    element: <h1>authors</h1>,
  },
  {
    path: '/books',
    element: <h1>books</h1>,
  },
  {
    path: '/favoritos',
    element: <h1>favoritos</h1>,
  },
])

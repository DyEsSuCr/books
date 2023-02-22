import { createBrowserRouter } from 'react-router-dom'

import { Root } from '../pages/Root'
import { Error } from '../routes/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
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
    ],
  },
])

import { createBrowserRouter } from 'react-router-dom'

import { Root } from '../pages/Root'
import { Library } from '../pages/Library'
import { Error } from '../routes/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Library />,
      },
    ],
  },
])

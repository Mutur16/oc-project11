import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Base from './pages/Base'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Account from './pages/Account'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/account',
        element: <Account />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

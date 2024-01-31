import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import Base from './pages/Base'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

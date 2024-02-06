import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getUserData } from '../../helper/api'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../reducers/authSlice'

function Base(): ReactNode {
  const dispatch = useDispatch()
  const token: string | null = localStorage.getItem('authToken')

  if (token) {
    getUserData(token).then((userData) => {
      dispatch(
        loginSuccess({
          token: token,
          userData: {
            email: userData.body.email,
            firstName: userData.body.firstName,
            lastName: userData.body.lastName,
            userName: userData.body.userName,
          },
        })
      )
    })
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Base

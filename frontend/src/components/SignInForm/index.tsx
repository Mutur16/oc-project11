import { ReactNode, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess, loginFailureOrLogout } from './../../reducers/authSlice'

import '../../main.scss'
import './signInForm.scss'
import { getUserData, login } from '../../helper/api'

function SignInForm(): ReactNode {
  const dispatch = useDispatch()

  const [error, setError] = useState(false)

  async function onSubmit(event: React.FormEvent<SignInFormElement>) {
    event.preventDefault()

    const rememberMe: boolean = event.currentTarget.elements.remember_me.checked
    const loginData = await login(
      event.currentTarget.elements.email.value,
      event.currentTarget.elements.password.value
    )

    if (loginData.status === 400) {
      dispatch(loginFailureOrLogout())
      setError(true)
    } else {
      const userData = await getUserData(loginData.body.token)

      dispatch(
        loginSuccess({
          token: loginData.body.token,
          userData: {
            email: userData.body.email,
            firstName: userData.body.firstName,
            lastName: userData.body.lastName,
            userName: userData.body.userName,
          },
          rememberMe: rememberMe,
        })
      )
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input-wrapper">
        <label>Email</label>
        <input type="text" name="email" />
      </div>
      <div className="input-wrapper">
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" name="remember_me" />
        <label>Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
      {error && (
        <span className="error">The email and/or password is not correct</span>
      )}
    </form>
  )
}

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
  remember_me: HTMLInputElement
}
interface SignInFormElement extends HTMLFormElement {
  elements: FormElements
}

export default SignInForm

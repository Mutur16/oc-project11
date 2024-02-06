import { ReactNode, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import '../../main.scss'
import './signIn.scss'
import SignInForm from '../../components/SignInForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'

function SignIn(): ReactNode {
  const navigate = useNavigate()
  const isLogged = useSelector((state: RootState) => state.auth.isLogged)

  useEffect(() => {
    if (isLogged) {
      navigate('/profile')
    }
  }, [isLogged, navigate])

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h2>Sign In</h2>
        <SignInForm />
      </section>
    </main>
  )
}

export default SignIn

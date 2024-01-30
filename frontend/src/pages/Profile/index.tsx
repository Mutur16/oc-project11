import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'

import './profile.scss'
import EditNameForm from '../../components/EditNameForm'
import AccountCard from '../../components/AccountCard'

function Profile(): ReactNode {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.user)
  const isLogged = user.isLogged
  const {firstName, lastName} = user.user!

  useEffect(() => {
    if (!isLogged) {
      navigate('/sign-in')
    }
  }, [isLogged, navigate])

  if (!isLogged) {
    return null
  }

  return (
    <main className="main bg-dark">
      <h2 className="welcome-title">
        Welcome back
        <br />
        {firstName} {lastName}
      </h2>
      <EditNameForm />
      <h2 className="sr-only">Accounts</h2>
      <AccountCard
        account={{
          title: 'Argent Bank Checking (x8349)',
          amount: 2082.79,
          description: 'Available Balance',
        }}
      />
      <AccountCard
        account={{
          title: 'Argent Bank Savings (x6712)',
          amount: 10928.42,
          description: 'Available Balance',
        }}
      />
      <AccountCard
        account={{
          title: 'Argent Bank Credit Card (x8349)',
          amount: 184.3,
          description: 'Current Balance',
        }}
      />
    </main>
  )
}

export default Profile

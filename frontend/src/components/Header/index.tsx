import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loggedOut } from './../../reducers/userSlice'
import { RootState } from './../../store'

import '../../main.scss'
import './header.scss'
import Logo from '../../assets/argentBankLogo.webp'

function Header(): ReactNode {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const isLogged = user.isLogged
  const userName = user.user?.userName

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Logo Argent Bank" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isLogged ? ( // when logged
          <div className="user-links">
            <Link to="/profile" className="link-container">
              <FontAwesomeIcon icon={faCircleUser} />
              {userName}
            </Link>
            <Link
              to="/"
              className="link-container"
              onClick={() => dispatch(loggedOut())}
            >
              <FontAwesomeIcon icon={faSignOut} />
              Sign Out
            </Link>
          </div>
        ) : (
          // when not logged in
          <Link to="/sign-in" className="link-container">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header

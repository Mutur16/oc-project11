import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from "react"

import '../../main.scss'
import './header.scss'
import Logo from '../../assets/argentBankLogo.png'

function Header(): ReactNode {
    const location = useLocation();
    const isAccountPage = location.pathname === '/account';

    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Logo Argent Bank" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {isAccountPage ? ( // when logged
                    <div className='user-links'>
                        <Link to="" className="link-container">
                            <FontAwesomeIcon icon={faCircleUser} />
                            Tony
                        </Link>
                        <Link to="/" className="link-container">
                            <FontAwesomeIcon icon={faSignOut} />
                            Sign Out
                        </Link>
                    </div>
                ) : ( // when not logged in
                    <Link to="/sign-in" className="link-container">
                        <FontAwesomeIcon icon={faCircleUser} />
                        Sign In
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Header
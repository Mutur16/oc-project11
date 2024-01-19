import { Link } from "react-router-dom"
import { ReactNode } from "react"

import "../../main.scss"
import "./signInForm.scss"

function SignInForm(): ReactNode {
    return (
        <form>
            <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label>Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label>
                    Remember me
                </label>
            </div>
            <Link to="/account" className="sign-in-button">
                Sign In
            </Link>
        </form>
    )
}

export default SignInForm
import { ReactNode } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import "../../main.scss"
import "./signIn.scss"
import SignInForm from "../../components/SignInForm"

function SignIn(): ReactNode {

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
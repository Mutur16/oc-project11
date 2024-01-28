import { ReactNode, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { loggedIn, setUserData } from "./../../reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from './../../store';

import "../../main.scss"
import "./signInForm.scss"
import { getUserData, login } from "../../helper/api"

function SignInForm(): ReactNode {
    const isLogged = useSelector((state: RootState) => state.user.isLogged)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [error, setError] = useState(false);

    async function onSubmit(event: React.FormEvent<SignInFormElement>) {
        event.preventDefault()

        const loginData = await login(
            event.currentTarget.elements.email.value,
            event.currentTarget.elements.password.value
        )
        
        if (loginData.status === 400) {
            setError(true)
            return null;
        } else {
            const userData = await getUserData(loginData.body.token);
            dispatch(loggedIn());
            dispatch(setUserData({ 
                email: userData.body.email, 
                firstName: userData.body.firstName, 
                lastName: userData.body.lastName, 
                userName: userData.body.userName,
                token : userData.body.token
            }));
        }
    }
    if (isLogged) {
        navigate("/profile");
        return null;
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
                <label>
                    Remember me
                </label>
            </div>
            <button type="submit" className="sign-in-button">
                Sign In
            </button>
            {error && <span className='error'>The email and/or password is not correct</span>}
        </form>
    )
}

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement,
    password: HTMLInputElement,
    remember_me: HTMLInputElement,
}
interface SignInFormElement extends HTMLFormElement {
    elements: FormElements
}

export default SignInForm
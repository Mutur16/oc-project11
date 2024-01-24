import { ReactNode, useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from './../../store';


import "./account.scss"
import AccountCard from "../../components/AccountCard"

function Account(): ReactNode {
    const navigate = useNavigate();
    const isLogged = useSelector((state: RootState) => state.user.isLogged);
    const firstName = useSelector((state: RootState) => state.user.user?.firstName);
    const lastName = useSelector((state: RootState) => state.user.user?.lastName);

    useEffect(() => {
        if (!isLogged) {
            navigate("/");
        }
    }, [isLogged, navigate]);

    if (!isLogged) {
        return null;
    }

    return (
        <main className="main bg-dark">
            <h2 className="welcome-title">Welcome back<br/>{firstName} {lastName}</h2>
            <button className="edit-button">Edit Name</button>
            <h2 className="sr-only">Accounts</h2>
            <AccountCard 
                account={{
                    title: "Argent Bank Checking (x8349)", 
                    amount: 2082.79,
                    description: "Available Balance"
                }}
            />
            <AccountCard 
                account={{
                    title: "Argent Bank Savings (x6712)", 
                    amount: 10928.42,
                    description: "Available Balance"
                }}
            />
            <AccountCard 
                account={{
                    title: "Argent Bank Credit Card (x8349)", 
                    amount: 184.30,
                    description: "Current Balance"
                }}
            />
        </main>
    )
}

export default Account

import { ReactNode } from "react"

import "./account.scss"
import AccountCard from "../../components/AccountCard"

function Account(): ReactNode {
    return (
        <main className="main bg-dark">
            <h2 className="welcome-title">Welcome back<br/>Tony Jarvis!</h2>
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

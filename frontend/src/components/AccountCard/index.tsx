import { ReactNode } from 'react'

import './accountCard.scss'

function AccountCard({ account }: AccountCardProps): ReactNode {
  const formattedAmount: string = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
  }).format(account.amount)

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{formattedAmount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

type AccountCardProps = {
  account: AccountCardType
}

type AccountCardType = {
  title: string
  amount: number
  description: string
}

export default AccountCard

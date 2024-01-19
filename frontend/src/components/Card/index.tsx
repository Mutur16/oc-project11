import { ReactNode } from "react"

import './card.scss'

function Card({ feature }: CardProps): ReactNode {
    return (
        <div className="feature-item">
            <img src={feature.icon} alt={feature.alt} className="feature-item-icon" />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.description}</p>
        </div>
    )
}

type CardProps = {
    feature: CardFeature
}

type CardFeature = {
    icon: string,
    alt: string,
    title: string,
    description: string
}

export default Card
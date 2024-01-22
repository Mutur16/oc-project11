import { ReactNode } from "react"

import './featureCard.scss'

function FeatureCard({ feature }: FeatureCardProps): ReactNode {
    return (
        <div className="feature-item">
            <img src={feature.icon} alt={feature.alt} className="feature-item-icon" />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.description}</p>
        </div>
    )
}

type FeatureCardProps = {
    feature: FeatureCardType
}

type FeatureCardType = {
    icon: string,
    alt: string,
    title: string,
    description: string
}

export default FeatureCard
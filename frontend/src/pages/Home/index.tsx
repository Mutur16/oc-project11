import { ReactNode } from "react"
import Hero from "../../components/Hero"
import FeatureCard from "../../components/FeatureCard"

import "./../../main.scss"
import "./home.scss"
import ChatIcon from "../../assets/icon-chat.png"
import MoneyIcon from "../../assets/icon-money.png"
import SecurityIcon from "../../assets/icon-security.png"

function Home(): ReactNode {
    return (
        <div className="main">
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureCard
                    feature={{
                        icon: ChatIcon, 
                        alt: "Chat Icon",
                        title: "You are our #1 priority", 
                        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    }}
                />
                <FeatureCard
                    feature={{
                        icon: MoneyIcon, 
                        alt: "Chat Icon",
                        title: "More savings means higher rates", 
                        description: "The more you save with us, the higher your interest rate will be!"
                    }}
                />
                <FeatureCard
                    feature={{
                        icon: SecurityIcon, 
                        alt: "Chat Icon",
                        title: "Security you can trust", 
                        description: "We use top of the line encryption to make sure your data and money is always safe."
                    }}
                />
            </section>
        </div>
    )
}

export default Home
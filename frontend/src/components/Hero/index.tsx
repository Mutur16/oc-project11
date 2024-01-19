import { ReactNode } from "react"

import '../../main.scss'
import './hero.scss'
import HeroImg from '../../assets/bank-tree.jpeg'

function Hero(): ReactNode {
    return (
        <div className="hero">
            <img src={HeroImg} alt='Plant in a pot of coins' />
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Hero
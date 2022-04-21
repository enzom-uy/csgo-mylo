import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card/Card'
import mapasimg from '/src/assets/card_mapas.png'

const Homepage: React.FC = () => {
    return (
        <main className="flex flex-col items-center">
            <h1
                role="heading"
                className="text-text-color text-3xl font-semibold drop-shadow-heading mb-12"
            >
                MYLO NADES
            </h1>
            <div>
                <NavLink to="/mapas">
                    <Card
                        altText="Multiple csgo maps blurred"
                        title="Mapas"
                        img={mapasimg}
                    />
                </NavLink>
            </div>
        </main>
    )
}

export default Homepage

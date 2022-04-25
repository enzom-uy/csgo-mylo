import React from 'react'
import Card from '../components/Card/Card'
import miragecard from '/src/assets/card_mirage.png'
import infernocard from '/src/assets/card_inferno.png'
import overpasscard from '/src/assets/card_overpass.png'
import dust2card from '/src/assets/card_dust2.png'
import nukecard from '/src/assets/card_nuke.png'
import { NavLink } from 'react-router-dom'

const maps = [
    {
        title: 'Mirage',
        img: miragecard
    },
    {
        title: 'Inferno',
        img: infernocard
    },
    {
        title: 'Overpass',
        img: overpasscard
    },
    {
        title: 'Dust 2',
        img: dust2card
    },
    {
        title: 'Nuke',
        img: nukecard
    }
]

const Mapas: React.FC = () => {
    return (
        <div className="flex flex-wrap w-full justify-center">
            {maps.map((map) => (
                <div key={map.title} className="h-fit">
                    <NavLink to={`/${map.title}/locations`}>
                        <Card title={map.title} img={map.img} />
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default Mapas

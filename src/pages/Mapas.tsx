import React from 'react'
import Card from '../components/Card/Card'
import miragecard from '/src/assets/card_mirage.png'
import infernocard from '/src/assets/card_inferno.png'
import overpasscard from '/src/assets/card_overpass.png'
import dust2card from '/src/assets/card_dust2.png'
import nukecard from '/src/assets/card_nuke.png'

const maps = [
    {
        title: 'Mirage',
        alt: 'Mapa de Mirage',
        img: miragecard
    },
    {
        title: 'Inferno',
        alt: 'Mapa de Inferno',
        img: infernocard
    },
    {
        title: 'Overpass',
        alt: 'Mapa de Overpass',
        img: overpasscard
    },
    {
        title: 'Dust 2',
        alt: 'Mapa de Dust 2',
        img: dust2card
    },
    {
        title: 'Nuke',
        alt: 'Mapa de Nuke',
        img: nukecard
    }
]

const Mapas: React.FC = () => {
    return (
        <div className="flex flex-wrap w-full justify-center">
            {maps.map((map) => (
                <Card
                    key={map.title}
                    title={map.title}
                    altText={map.alt}
                    img={map.img}
                />
            ))}
        </div>
    )
}

export default Mapas

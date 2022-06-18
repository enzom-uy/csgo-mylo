import React from 'react'
import { LocationLink, Props } from '../index.components'

const mapLocations = [
  {
    link: 'site-a',
    name: 'Site a'
  },
  {
    link: 'site-b',
    name: 'Site b'
  },
  {
    link: 'corta',
    name: 'Corta / Banana'
  },
  {
    link: 'medio',
    name: 'Medio'
  },
  {
    link: 'banios',
    name: 'Baños'
  },
  {
    link: 'liga',
    name: 'Liga'
  },
  {
    link: 'aguas',
    name: 'Aguas'
  },
  {
    link: 'cielo',
    name: 'Cielo'
  },
  {
    link: 'sapo',
    name: 'Sapo'
  }
]

export const Overpass: React.FC<Props> = ({ location }) => {
  return (
    <>
      {mapLocations.map((loc) => (
        <LocationLink key={loc.link} navTo={`${location}/${loc.link}`}>
          {loc.name}
        </LocationLink>
      ))}
    </>
  )
}

export default Overpass

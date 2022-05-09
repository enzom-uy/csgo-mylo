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
    link: 'cielo',
    name: 'Cielo'
  },
  {
    link: 'lobby',
    name: 'Lobby'
  },
  {
    link: 'afuera',
    name: 'Afuera'
  },
  {
    link: 'silo',
    name: 'Silo'
  },
  {
    link: 'rampa',
    name: 'Rampa'
  }
]

export const Nuke: React.FC<Props> = ({ location }) => {
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

export default Nuke

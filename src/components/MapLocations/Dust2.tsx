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
    link: 'medio',
    name: 'Medio'
  },
  {
    link: 'medio-ct',
    name: 'Medio CT'
  },
  {
    link: 'fondo',
    name: 'Fondo'
  },
  {
    link: 'varanda',
    name: 'Varanda'
  },
  {
    link: 'oscuro',
    name: 'Oscuro'
  },
  {
    link: 'base-tt',
    name: 'Base TT'
  },
  {
    link: 'base-ct',
    name: 'Base CT'
  }
]

export const Dust2: React.FC<Props> = ({ location }) => {
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

export default Dust2

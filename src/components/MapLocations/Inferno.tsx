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
    name: 'Corta'
  },
  {
    link: 'larga',
    name: 'Larga'
  },
  {
    link: 'tapete-ct',
    name: 'Tapete CT'
  },
  {
    link: 'tapete-tt',
    name: 'Tapete TT'
  },
  {
    link: 'medio',
    name: 'medio'
  },
  {
    link: 'medio-falso',
    name: 'Medio falso'
  },
  {
    link: 'banana',
    name: 'Banana'
  }
]

export const Inferno: React.FC<Props> = ({ location }) => {
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

export default Inferno

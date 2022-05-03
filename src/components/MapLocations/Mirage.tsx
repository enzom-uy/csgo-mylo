import React from 'react'
import { Props, LocationLink } from '../index.components'

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
    link: 'liga',
    name: 'Liga'
  },
  {
    link: 'medio',
    name: 'Medio'
  },
  {
    link: 'ratas',
    name: 'Ratas'
  },
  {
    link: 'varanda',
    name: 'Varanda (L)'
  },
  {
    link: 'palacio',
    name: 'Palacio'
  },
  {
    link: 'ct',
    name: 'Base CT'
  },
  {
    link: 'tt',
    name: 'Base TT'
  },
  {
    link: 'tapete',
    name: 'Tapete'
  },
  {
    link: 'mercado',
    name: 'Mercado'
  }
]

export const Mirage: React.FC<Props> = ({ location }) => {
  const Component = MapasComponents.Mirage
  if (!Component) {
    return null
  } else
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

export default Mirage

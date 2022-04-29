import React, { lazy } from 'react'
import { useLocation, useParams } from 'react-router-dom'
const Dust2 = lazy(() => import('../components/MapLocations/Dust2'))
const Mirage = lazy(() => import('../components/MapLocations/Mirage'))
const Inferno = lazy(() => import('../components/MapLocations/Inferno'))
const Overpass = lazy(() => import('../components/MapLocations/Overpass'))
const Nuke = lazy(() => import('../components/MapLocations/Nuke'))

const Locations: React.FC = () => {
  const location = useLocation().pathname
  const { mapa } = useParams()
  return (
    <div className="flex flex-col gap-4">
      {mapa === 'Mirage' ? <Mirage location={location} /> : null}
      {mapa === 'Dust 2' ? <Dust2 location={location} /> : null}
      {mapa === 'Nuke' ? <Nuke location={location} /> : null}
      {mapa === 'Overpass' ? <Overpass location={location} /> : null}
      {mapa === 'Inferno' ? <Inferno location={location} /> : null}
    </div>
  )
}

export default Locations

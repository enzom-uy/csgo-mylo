import React, { lazy, Suspense } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
const Dust2 = lazy(() => import('../components/MapLocations/Dust2'))
const Mirage = lazy(() => import('../components/MapLocations/Mirage'))
const Inferno = lazy(() => import('../components/MapLocations/Inferno'))
const Overpass = lazy(() => import('../components/MapLocations/Overpass'))
const Nuke = lazy(() => import('../components/MapLocations/Nuke'))
import { MotionDiv } from '../components/index.components'
import { Maps } from '../models/index.models'

const Mapas: Maps = {
  Mirage: 'Mirage',
  Dust2: 'Dust 2',
  Overpass: 'Overpass',
  Nuke: 'Nuke',
  Inferno: 'Inferno'
}

export const Locations: React.FC = () => {
  const location = useLocation().pathname
  const { mapa } = useParams()
  return (
    <MotionDiv className="flex flex-col pt-28 gap-4 424:pt-0">
      <Suspense fallback={<SyncLoader color="#406E8E" />}>
        {mapa === Mapas.Mirage && <Mirage location={location} />}
        {mapa === Mapas.Dust2 && <Dust2 location={location} />}
        {mapa === Mapas.Nuke && <Nuke location={location} />}
        {mapa === Mapas.Overpass && <Overpass location={location} />}
        {mapa === Mapas.Inferno && <Inferno location={location} />}
      </Suspense>
    </MotionDiv>
  )
}

export default Locations

import React, { lazy, Suspense } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
const Dust2 = lazy(() => import('../components/MapLocations/Dust2'))
const Mirage = lazy(() => import('../components/MapLocations/Mirage'))
const Inferno = lazy(() => import('../components/MapLocations/Inferno'))
const Overpass = lazy(() => import('../components/MapLocations/Overpass'))
const Nuke = lazy(() => import('../components/MapLocations/Nuke'))
import { MotionDiv } from '../components/index.components'

export const Locations: React.FC = () => {
  const location = useLocation().pathname
  const { mapa } = useParams()
  return (
    <MotionDiv className="flex flex-col pt-28 gap-4 424:pt-0">
      <Suspense fallback={<SyncLoader color="#406E8E" />}>
        {mapa === 'Mirage' ? <Mirage location={location} /> : null}
        {mapa === 'Dust 2' ? <Dust2 location={location} /> : null}
        {mapa === 'Nuke' ? <Nuke location={location} /> : null}
        {mapa === 'Overpass' ? <Overpass location={location} /> : null}
        {mapa === 'Inferno' ? <Inferno location={location} /> : null}
      </Suspense>
    </MotionDiv>
  )
}

export default Locations

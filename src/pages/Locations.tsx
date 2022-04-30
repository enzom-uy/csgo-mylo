import React, { lazy, Suspense } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
const Dust2 = lazy(() => import('../components/MapLocations/Dust2'))
const Mirage = lazy(() => import('../components/MapLocations/Mirage'))
const Inferno = lazy(() => import('../components/MapLocations/Inferno'))
const Overpass = lazy(() => import('../components/MapLocations/Overpass'))
const Nuke = lazy(() => import('../components/MapLocations/Nuke'))
import { motion } from 'framer-motion'

const Locations: React.FC = () => {
  const location = useLocation().pathname
  const { mapa } = useParams()
  return (
    <motion.div
      className="flex flex-col pt-28 gap-4 424:pt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.001 }}
    >
      {mapa === 'Mirage' ? (
        <Suspense fallback={<SyncLoader color="#406E8E" />}>
          <Mirage location={location} />
        </Suspense>
      ) : null}
      {mapa === 'Dust 2' ? (
        <Suspense fallback={<SyncLoader color="#406E8E" />}>
          <Dust2 location={location} />
        </Suspense>
      ) : null}
      {mapa === 'Nuke' ? (
        <Suspense fallback={<SyncLoader color="#406E8E" />}>
          <Nuke location={location} />
        </Suspense>
      ) : null}
      {mapa === 'Overpass' ? (
        <Suspense fallback={<SyncLoader color="#406e8e" />}>
          <Overpass location={location} />
        </Suspense>
      ) : null}
      {mapa === 'Inferno' ? (
        <Suspense fallback={<SyncLoader color="#406E8E" />}>
          <Inferno location={location} />
        </Suspense>
      ) : null}
    </motion.div>
  )
}

export default Locations

import React, { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
const Nade = lazy(() => import('../components/Nade/Nade'))
import useGetSmokes from '../hooks/useGetSmokes'
import useGetMolos from '../hooks/useGetMolos'
import useGetFlashes from '../hooks/useGetFlashes'
import { motion } from 'framer-motion'
import ClipLoader from 'react-spinners/ClipLoader'

const Nades: React.FC = () => {
  const { location, mapa } = useParams()
  const { loadingSmokes, smokesFromLocation } = useGetSmokes(location, mapa)
  const { loadingFlashes, flashesFromLocation } = useGetFlashes(location, mapa)
  const { loadingMolos, molosFromLocation } = useGetMolos(location, mapa)
  return (
    <motion.div
      className="flex flex-col justify-center gap-10 w-full pt-28 424:pt-0 flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.001 }}
    >
      <Suspense fallback={<ClipLoader color="#406E8E" />}>
        <div>
          <h1 className="text-center text-3xl text-text-color drop-shadow-heading mb-4">
            Smokes
          </h1>
          <div className="flex justify-center gap-10 w-full flex-wrap">
            {!loadingSmokes
              ? smokesFromLocation.map((smoke) => (
                  <Nade
                    key={smoke.id}
                    name={smoke.name}
                    videoUrl={smoke.videoUrl}
                  />
                ))
              : loadingSmokes}
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl text-text-color drop-shadow-heading mb-4">
            Flashes
          </h1>
          <div className="flex justify-center gap-10 w-full flex-wrap">
            {!loadingFlashes
              ? flashesFromLocation.map((flash) => (
                  <Nade
                    key={flash.id}
                    name={flash.name}
                    videoUrl={flash.videoUrl}
                  />
                ))
              : loadingFlashes}
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl text-text-color drop-shadow-heading mb-4">
            Molos
          </h1>
          <div className="flex justify-center gap-10 w-full flex-wrap">
            {!loadingMolos
              ? molosFromLocation.map((molo) => (
                  <Nade
                    key={molo.id}
                    name={molo.name}
                    videoUrl={molo.videoUrl}
                  />
                ))
              : loadingMolos}
          </div>
        </div>
      </Suspense>
    </motion.div>
  )
}

export default Nades

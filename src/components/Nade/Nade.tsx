import React, { lazy, Suspense } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
const Video = lazy(() => import('../Video/Video'))

interface Props {
  name: string
  key: string
  videoUrl: string
}

export const Nade: React.FC<Props> = ({ name, videoUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-text-color font-medium text-2xl mb-2">
        {name}
      </p>
      <Suspense fallback={<ClipLoader color="#406E8E" />}>
        <Video src={videoUrl} />
      </Suspense>
    </div>
  )
}
export default Nade

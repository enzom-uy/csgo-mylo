import React from 'react'

interface Props {
  src: string
}

const Video: React.FC<Props> = ({ src }) => {
  return (
    <video controls className="min-w-[240px] w-[400px] max-w-[50vw]">
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video

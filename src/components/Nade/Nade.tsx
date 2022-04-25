import React from 'react'
import Video from '../Video/Video'

interface Props {
    name: string
    key: string
    videoUrl: string
}

const Nade: React.FC<Props> = ({ name, videoUrl }) => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-center text-text-color font-medium text-2xl mb-2">
                {name}
            </p>
            <Video src={videoUrl} />
        </div>
    )
}

export default Nade

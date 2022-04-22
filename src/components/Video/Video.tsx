import React from 'react'

interface Props {
    src: string
}

const Video: React.FC<Props> = ({ src }) => {
    return (
        <div>
            <iframe
                src={src}
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Video

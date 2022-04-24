import React from 'react'
import { useParams } from 'react-router-dom'
import Video from '../components/Video/Video'
import useGetSmokes from '../hooks/useGetSmokes'

const Nades: React.FC = () => {
    const { location } = useParams()
    const { smokes, flashes } = useGetSmokes(location)

    return (
        <div className="flex flex-col justify-center gap-10 w-full flex-wrap">
            <h1 className="text-center text-3xl text-text-color drop-shadow-heading">
                Smokes
            </h1>
            <div className="flex justify-center gap-10 w-full flex-wrap">
                {/* Here goes the array.map to render a <Video /> component for every nade */}
                <video autoPlay controls className="min-w-[240px] max-w-[50vw]">
                    <source
                        src="https://giant.gfycat.com/DefiantHonoredChevrotain.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    )
}

export default Nades

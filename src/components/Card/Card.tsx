import React from 'react'

interface Props {
    altText: string
    title: string
    img: string
}

const Card: React.FC<Props> = ({ altText, title, img }) => {
    return (
        <div className="text-center relative overflow-hidden drop-shadow-heading cursor-pointer">
            <img src={img} className="object-cover h-48 w-96" alt={altText} />
            <h1 className="text-white text-3xl font-semibold absolute top-[50%] left-[50%] translate-x-[-58%] translate-y-[-75%]">
                {title}
            </h1>
        </div>
    )
}

export default Card

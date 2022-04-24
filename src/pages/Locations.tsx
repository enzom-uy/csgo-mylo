import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'

const Locations: React.FC = () => {
    const location = useLocation()
    const { mapa } = useParams()

    return (
        <div className="flex flex-col gap-4">
            <NavLink
                to={`${location.pathname}/site-a`}
                className="text-text-color"
            >
                Site de A
            </NavLink>
            <NavLink
                to={`${location.pathname}/site-b`}
                className="text-text-color"
            >
                Site de B
            </NavLink>
            <NavLink
                to={`${location.pathname}/medio`}
                className="text-text-color"
            >
                Medio
            </NavLink>
            {mapa === 'Nuke' ? (
                <NavLink
                    className="text-text-color"
                    to={`${location.pathname}/afuera`}
                >
                    Afuera
                </NavLink>
            ) : null}
        </div>
    )
}

export default Locations

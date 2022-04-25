import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    location: string
}

const Mirage: React.FC<Props> = ({ location }) => {
    return (
        <>
            <NavLink
                to={`${location}/site-a`}
                className="text-text-color text-xl"
            >
                Site de A
            </NavLink>
            <NavLink
                to={`${location}/liga`}
                className="text-text-color text-xl"
            >
                Liga
            </NavLink>
            <NavLink
                to={`${location}/site-b`}
                className="text-text-color text-xl"
            >
                Site de B
            </NavLink>
            <NavLink
                to={`${location}/medio`}
                className="text-text-color text-xl"
            >
                Medio
            </NavLink>
            <NavLink
                to={`${location}/ratas`}
                className="text-text-color text-xl"
            >
                Ratas
            </NavLink>
            <NavLink
                to={`${location}/varanda`}
                className="text-text-color text-xl"
            >
                Varanda (L)
            </NavLink>
            <NavLink
                to={`${location}/palacio`}
                className="text-text-color text-xl"
            >
                Palacio
            </NavLink>
            <NavLink to={`${location}/ct`} className="text-text-color text-xl">
                Base CT
            </NavLink>
            <NavLink to={`${location}/tt`} className="text-text-color text-xl">
                Base TT
            </NavLink>
            <NavLink
                to={`${location}/tapete`}
                className="text-text-color text-xl"
            >
                Tapete
            </NavLink>
            <NavLink
                to={`${location}/mercado`}
                className="text-text-color text-xl"
            >
                Mercado
            </NavLink>
        </>
    )
}

export default Mirage

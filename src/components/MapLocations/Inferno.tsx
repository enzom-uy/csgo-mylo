import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    location: string
}

const Inferno: React.FC<Props> = ({ location }) => {
    return (
        <>
            <NavLink to={`${location}/site-a`} className="text-text-color">
                Site de A
            </NavLink>
            <NavLink to={`${location}/corta`} className="text-text-color">
                Corta
            </NavLink>
            <NavLink to={`${location}/larga`} className="text-text-color">
                Larga
            </NavLink>
            <NavLink to={`${location}/tapete-ct`} className="text-text-color">
                Tapete CT
            </NavLink>
            <NavLink to={`${location}/site-b`} className="text-text-color">
                Site de B
            </NavLink>
            <NavLink to={`${location}/medio`} className="text-text-color">
                Medio
            </NavLink>
            <NavLink to={`${location}/tapete-tt`} className="text-text-color">
                Tapete TT
            </NavLink>
            <NavLink to={`${location}/medio-falso`} className="text-text-color">
                Medio falso
            </NavLink>
            <NavLink to={`${location}/banana`} className="text-text-color">
                Banana
            </NavLink>
        </>
    )
}

export default Inferno

import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeContext'
import { NavLink, useLocation } from 'react-router-dom'

const MobileMenuItems: React.FC = () => {
    const currentLocation = useLocation().pathname
    return (
        <ul className="fixed right-0 left-0 top-[10.5%] bg-background-start w-full shadow-custom">
            <li
                className={`text-center ${
                    currentLocation === '/' ? 'bg-red-900' : ''
                }`}
            >
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li
                className={`text-center ${
                    currentLocation === '/mapas' ? 'bg-red-900' : ''
                }`}
            >
                <NavLink to="/mapas">Mapas</NavLink>
            </li>
            <li
                className={`text-center ${
                    currentLocation === '/agregar' ? 'bg-red-900' : ''
                }`}
            >
                <NavLink to="/agregar">Agregar nade</NavLink>
            </li>
        </ul>
    )
}

export default MobileMenuItems

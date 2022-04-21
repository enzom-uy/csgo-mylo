import React from 'react'
import { useLocation } from 'react-router-dom'

const MobileMenuItems: React.FC = () => {
    const currentLocation = useLocation().pathname
    console.log(currentLocation)
    return (
        <ul className="fixed right-0 left-0 top-[10.5%] bg-background-start w-full shadow-custom">
            <li
                className={`text-center ${
                    currentLocation === '/' ? 'bg-red-900' : ''
                }`}
            >
                Inicio
            </li>
            <li
                className={`text-center ${
                    currentLocation === '/mapas' ? 'bg-red-900' : ''
                }`}
            >
                Mapas
            </li>
            <li
                className={`text-center ${
                    currentLocation === '/agregar' ? 'bg-red-900' : ''
                }`}
            >
                Agregar nade
            </li>
        </ul>
    )
}

export default MobileMenuItems

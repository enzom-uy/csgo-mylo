import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useLocation } from 'react-router-dom'
import { auth } from '../../firebase'

interface Props {
  toggle: () => void
}

const MobileMenuItems: React.FC<Props> = ({ toggle }) => {
  const currentLocation = useLocation().pathname
  const [user] = useAuthState(auth)
  return (
    <ul className="fixed right-0 left-0 top-[4.9%] bg-background-start w-full shadow-custom">
      <li
        onClick={toggle}
        className={`text-center ${
          currentLocation === '/' ? 'bg-primary-darker' : ''
        } h-10 flex justify-center items-center cursor-pointer`}
      >
        <NavLink to="/" className="text-text-color w-full">
          Inicio
        </NavLink>
      </li>
      <li
        onClick={toggle}
        className={`text-center ${
          currentLocation === '/mapas' ? 'bg-primary-darker' : ''
        } h-10 flex justify-center items-center cursor-pointer`}
      >
        <NavLink to="/mapas" className="text-text-color w-full">
          Mapas
        </NavLink>
      </li>
      <li
        onClick={toggle}
        className={`text-center ${
          currentLocation === '/agregar' ? 'bg-primary-darker' : ''
        } h-10 flex justify-center items-center cursor-pointer`}
      >
        {user ? (
          <NavLink to="/agregar/form" className="text-text-color w-full">
            Agregar nade
          </NavLink>
        ) : (
          <NavLink to="/agregar" className="text-text-color w-full">
            Agregar nade
          </NavLink>
        )}
      </li>
    </ul>
  )
}

export default MobileMenuItems

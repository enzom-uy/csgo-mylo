import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useLocation } from 'react-router-dom'
import { auth } from '../../firebase'

const DesktopMenu: React.FC = () => {
  const currentLocation = useLocation().pathname
  const [user] = useAuthState(auth)
  return (
    <>
      <ul className={`flex items-center gap-6`}>
        <li
          className={`font-medium ${
            currentLocation === '/' ? 'text-red-500' : 'text-text-color'
          }
                `}
        >
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li
          className={`font-medium ${
            currentLocation === '/mapas' ? 'text-red-500' : 'text-text-color'
          }
                `}
        >
          <NavLink to="/mapas">Mapas</NavLink>
        </li>
        <li
          className={`font-medium ${
            currentLocation === '/agregar' ? 'text-red-500' : 'text-text-color'
          }
                `}
        >
          {user ? (
            <NavLink to="/agregar/form">Agregar nade</NavLink>
          ) : (
            <NavLink to="/agregar">Agregar nade</NavLink>
          )}
        </li>
        {user ? (
          <div className="w-10 rounded-full overflow-hidden">
            <img src={user.photoURL!} />
          </div>
        ) : null}
      </ul>
    </>
  )
}

export default DesktopMenu

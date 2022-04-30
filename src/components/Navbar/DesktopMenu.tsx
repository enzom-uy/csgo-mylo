import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useLocation } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { auth } from '../../firebase'

const DesktopMenu: React.FC = () => {
  const currentLocation = useLocation().pathname
  const [user, loading] = useAuthState(auth)
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
          <NavLink to="/agregar">Agregar nade</NavLink>
        </li>
        {loading ? (
          <ClipLoader />
        ) : user ? (
          <img
            width="30"
            height="30"
            src={user.photoURL!}
            className="rounded-full"
            alt="User profile picture"
          />
        ) : null}
      </ul>
    </>
  )
}

export default DesktopMenu

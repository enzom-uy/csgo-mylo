import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  location: string
}

const Dust2: React.FC<Props> = ({ location }) => {
  return (
    <>
      <NavLink to={`${location}/site-a`} className="text-text-color">
        Site de A
      </NavLink>
      <NavLink to={`${location}/site-b`} className="text-text-color">
        Site de B
      </NavLink>
      <NavLink to={`${location}/medio`} className="text-text-color">
        Medio
      </NavLink>
      <NavLink to={`${location}/medio-ct`} className="text-text-color">
        Medio CT
      </NavLink>
      <NavLink to={`${location}/fondo`} className="text-text-color">
        Fondo
      </NavLink>
      <NavLink to={`${location}/varanda`} className="text-text-color">
        Varanda
      </NavLink>
      <NavLink to={`${location}/oscuro`} className="text-text-color">
        Oscuro
      </NavLink>
      <NavLink to={`${location}/tt`} className="text-text-color">
        Base TT
      </NavLink>
      <NavLink to={`${location}/ct`} className="text-text-color">
        Base CT
      </NavLink>
    </>
  )
}

export default Dust2

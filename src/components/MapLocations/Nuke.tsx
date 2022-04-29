import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  location: string
}

const Nuke: React.FC<Props> = ({ location }) => {
  return (
    <>
      <NavLink to={`${location}/site-a`} className="text-text-color">
        Site de A
      </NavLink>
      <NavLink to={`${location}/cielo`} className="text-text-color">
        Cielo
      </NavLink>
      <NavLink to={`${location}/lobby`} className="text-text-color">
        Lobby
      </NavLink>
      <NavLink to={`${location}/afuera`} className="text-text-color">
        Afuera
      </NavLink>
      <NavLink to={`${location}/silo`} className="text-text-color">
        Silo
      </NavLink>
      <NavLink to={`${location}/site-b`} className="text-text-color">
        Site de B
      </NavLink>
      <NavLink to={`${location}/rampa`} className="text-text-color">
        Rampa
      </NavLink>
    </>
  )
}

export default Nuke

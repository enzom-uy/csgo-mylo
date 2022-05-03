import React from 'react'
import { NavLink } from 'react-router-dom'
import { Props } from '../index.components'

export const Overpass: React.FC<Props> = ({ location }) => {
  return (
    <>
      <NavLink to={`${location}/site-a`} className="text-text-color">
        Site de A
      </NavLink>
      <NavLink to={`${location}/site-b`} className="text-text-color">
        Site de B
      </NavLink>
      <NavLink to={`${location}/corta`} className="text-text-color">
        Corta / Banana
      </NavLink>
      <NavLink to={`${location}/medio`} className="text-text-color">
        Medio
      </NavLink>
      <NavLink to={`${location}/fondo`} className="text-text-color">
        Fondo
      </NavLink>
      <NavLink to={`${location}/banios`} className="text-text-color">
        Baños
      </NavLink>
      <NavLink to={`${location}/liga`} className="text-text-color">
        Liga
      </NavLink>
      <NavLink to={`${location}/aguas`} className="text-text-color">
        Aguas
      </NavLink>
      <NavLink to={`${location}/cielo`} className="text-text-color">
        Cielo
      </NavLink>
    </>
  )
}

export default Overpass

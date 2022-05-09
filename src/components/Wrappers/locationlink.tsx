import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  navTo: string
}

export const LocationLink: React.FC<Props> = ({ children, navTo }) => {
  return (
    <NavLink to={navTo} className="text-text-color text-md">
      {children}
    </NavLink>
  )
}

export default LocationLink

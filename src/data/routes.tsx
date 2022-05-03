import React, { lazy } from 'react'
const Homepage = lazy(() => import('../pages/Homepage'))
const AddNade = lazy(() => import('../pages/AddNade'))
const Mapas = lazy(() => import('../pages/Mapas'))
const Locations = lazy(() => import('../pages/Locations'))
const Nades = lazy(() => import('../pages/Nades'))

export const routes = [
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/mapas',
    element: <Mapas />
  },
  {
    path: '/agregar',
    element: <AddNade />
  },
  {
    path: '/:mapa/locations',
    element: <Locations />
  },
  {
    path: '/:mapa/locations/:location',
    element: <Nades />
  }
]

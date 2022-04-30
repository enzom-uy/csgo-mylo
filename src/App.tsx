import React, { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from './components/Layout'
import ThemeContextProvider from './providers/ThemeContext'
const Homepage = lazy(() => import('./pages/Homepage'))
const AddNade = lazy(() => import('./pages/AddNade'))
const Mapas = lazy(() => import('./pages/Mapas'))
const Locations = lazy(() => import('./pages/Locations'))
const Nades = lazy(() => import('./pages/Nades'))
import { AnimatePresence } from 'framer-motion'

const App: React.FC = () => {
  const location = useLocation()

  const routes = [
    {
      path: '/',
      element: (
        <Suspense fallback={false}>
          <Homepage />
        </Suspense>
      )
    },
    {
      path: '/mapas',
      element: (
        <Suspense fallback={null}>
          <Mapas />
        </Suspense>
      )
    },
    {
      path: '/agregar',
      element: (
        <Suspense fallback={null}>
          <AddNade />
        </Suspense>
      )
    },
    {
      path: '/:mapa/locations',
      element: (
        <Suspense fallback={null}>
          <Locations />
        </Suspense>
      )
    },
    {
      path: '/:mapa/locations/:location',
      element: (
        <Suspense fallback={null}>
          <Nades />
        </Suspense>
      )
    }
  ]
  return (
    <ThemeContextProvider>
      <div className="min-h-screen flex bg-gradient-to-br from-background-start to-primary-darker">
        <Layout>
          <ToastContainer
            pauseOnFocusLoss={false}
            position={'top-center'}
            autoClose={3000}
            newestOnTop
            draggable
          />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </AnimatePresence>
        </Layout>
      </div>
    </ThemeContextProvider>
  )
}

export default App

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
import ClipLoader from 'react-spinners/ClipLoader'

const App: React.FC = () => {
  const location = useLocation()

  const routes = [
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
            <Suspense fallback={<ClipLoader color="#406e8e" />}>
              <Routes location={location} key={location.pathname}>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Suspense>
          </AnimatePresence>
        </Layout>
      </div>
    </ThemeContextProvider>
  )
}

export default App

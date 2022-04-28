import React, { lazy, Suspense } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import { auth } from './firebase'
import ThemeContextProvider from './providers/ThemeContext'
const Homepage = lazy(() => import('./pages/Homepage'))
const AddNade = lazy(() => import('./pages/AddNade'))
const AddNadeForm = lazy(() => import('./pages/AddNadeForm'))
const Mapas = lazy(() => import('./pages/Mapas'))
const Locations = lazy(() => import('./pages/Locations'))
const Nades = lazy(() => import('./pages/Nades'))

const App: React.FC = () => {
  const [user, loading] = useAuthState(auth)
  function RequireAuth({ children }: { children: JSX.Element }) {
    if (loading === false && user === null) {
      return <Navigate to="/" />
    }
    return children
  }

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
      path: '/agregar/form',
      element: (
        <Suspense fallback={null}>
          <RequireAuth>
            <AddNadeForm />
          </RequireAuth>
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
      <div className="min-h-screen flex bg-gradient-to-br from-background-start to-background-end">
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </div>
    </ThemeContextProvider>
  )
}

export default App

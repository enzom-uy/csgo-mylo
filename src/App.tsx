import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import Layout from './components/Layout'
import ThemeContextProvider from './providers/ThemeContext'
const Homepage = lazy(() => import('./pages/Homepage'))
const Mapas = lazy(() => import('./pages/Mapas'))
const Locations = lazy(() => import('./pages/Locations'))
const Nades = lazy(() => import('./pages/Nades'))

const App: React.FC = () => {
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
                <Suspense fallback={<ClipLoader color="#406383" />}>
                    <Mapas />
                </Suspense>
            )
        },
        {
            path: '/agregar',
            element: (
                <Suspense fallback={<ClipLoader color="#406383" />}>
                    <Homepage />
                </Suspense>
            )
        },
        {
            path: '/:mapa/locations',
            element: (
                <Suspense fallback={<ClipLoader color="#406383" />}>
                    <Locations />
                </Suspense>
            )
        },
        {
            path: '/:mapa/locations/:location',
            element: (
                <Suspense fallback={<ClipLoader color="#406383" />}>
                    <Nades />
                </Suspense>
            )
        }
    ]
    return (
        <ThemeContextProvider>
            <div className="min-h-screen flex bg-gradient-to-br from-background-start to-background-end pb-[75px]">
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

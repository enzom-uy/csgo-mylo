import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
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
                <Suspense fallback={<div>Cargando</div>}>
                    <Mapas />
                </Suspense>
            )
        },
        {
            path: '/agregar',
            element: (
                <Suspense fallback={false}>
                    <Homepage />
                </Suspense>
            )
        },
        {
            path: '/:mapa/locations',
            element: (
                <Suspense fallback={false}>
                    <Locations />
                </Suspense>
            )
        },
        {
            path: '/:mapa/locations/:location',
            element: (
                <Suspense fallback={false}>
                    <Nades />
                </Suspense>
            )
        }
    ]
    return (
        <ThemeContextProvider>
            <div className="min-h-screen flex px-[12px] bg-gradient-to-br from-background-start to-background-end pb-[75px]">
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

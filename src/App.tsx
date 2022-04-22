import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
const Mapas = lazy(() => import('./pages/Mapas'))
import Layout from './components/Layout'
import ThemeContextProvider from './providers/ThemeContext'

const App: React.FC = () => {
    const routes = [
        {
            path: '/',
            element: <Homepage />
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
            element: <Homepage />
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

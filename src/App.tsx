import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Mapas from './pages/Mapas'
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
            element: <Mapas />
        },
        {
            path: '/agregar',
            element: <Homepage />
        }
    ]
    return (
        <div className="min-h-screen flex px-[12px] bg-gradient-to-br from-background-start to-background-end pb-[75px]">
            <ThemeContextProvider>
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
            </ThemeContextProvider>
        </div>
    )
}

export default App

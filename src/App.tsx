import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './components/Layout'
import ThemeContextProvider from './providers/ThemeContext'

function App() {
    const routes = [
        {
            path: '/',
            element: <Homepage />
        }
    ]
    return (
        <div className="h-screen flex px-[12px] bg-gradient-to-br from-background-start to-background-end pb-[75px]">
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

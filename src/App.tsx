import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
    const routes = [
        {
            path: '/',
            element: <Homepage />
        }
    ]
    return (
        <div className="App">
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </div>
    )
}

export default App

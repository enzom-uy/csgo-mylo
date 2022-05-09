import React, { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from './components/Layout'
import { AnimatePresence } from 'framer-motion'
import ClipLoader from 'react-spinners/ClipLoader'
import { routes } from './data/index.data'
import Navbar from './components/Navbar/Navbar'

const App: React.FC = () => {
  const location = useLocation()

  return (
    <div>
      <Navbar />
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
    </div>
  )
}

export default App

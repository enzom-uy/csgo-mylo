import React, { useEffect } from 'react'
import { Footer, Navbar } from './index.components'
import { useLocation } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="w-full">
      <Navbar />
      <main
        className={`flex justify-center items-start flex-wrap pt-0 px-5 min-h-screen 424:pt-28`}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

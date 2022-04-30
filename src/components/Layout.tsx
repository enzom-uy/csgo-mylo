import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import { ThemeContext } from '../providers/ThemeContext'
import Footer from './Footer/Footer'
import { useLocation } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { isMobile } = useContext(ThemeContext)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="w-full">
      <Navbar />
      <main
        className={`flex justify-center items-start flex-wrap px-5 ${
          isMobile ? 'pt-[7rem]' : 'pt-[7rem]'
        } min-h-screen`}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

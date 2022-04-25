import React, { useContext } from 'react'
import Navbar from './Navbar/Navbar'
import { ThemeContext } from '../providers/ThemeContext'
import Footer from './Footer/Footer'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    const { isMobile } = useContext(ThemeContext)
    return (
        <div className="w-full">
            <Navbar />
            <main
                className={`flex justify-center flex-wrap px-5 ${
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

import React from 'react'
import Navbar from './Navbar/Navbar'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-full">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout

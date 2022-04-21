import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeContext'
import MobileMenu from './MobileMenu'
import logo from '/src/assets/mylo_navbarpng.png'

const Navbar: React.FC = () => {
    const { isMobile } = useContext(ThemeContext)
    return (
        <nav
            role="navigation"
            className="flex pt-[10px] items-center justify-between"
        >
            <div>
                <img src={logo} />
            </div>
            {isMobile ? <MobileMenu /> : ''}
        </nav>
    )
}

export default Navbar

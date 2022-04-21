import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeContext'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import logo from '/src/assets/mylo_navbarpng.png'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    const { isMobile } = useContext(ThemeContext)
    return (
        <nav
            role="navigation"
            className={`flex pt-[10px] pb-[46px] ${
                !isMobile ? 'px-5' : null
            } items-center justify-between`}
        >
            <NavLink to="/">
                <img src={logo} />
            </NavLink>
            {isMobile ? <MobileMenu /> : <DesktopMenu />}
        </nav>
    )
}

export default Navbar

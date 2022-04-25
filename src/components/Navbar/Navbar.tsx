import React, { useContext, lazy, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../providers/ThemeContext'
const MobileMenu = lazy(() => import('./MobileMenu'))
const DesktopMenu = lazy(() => import('./DesktopMenu'))
import logo from '/src/assets/mylo_navbarpng.png'

const Navbar: React.FC = () => {
    const { isMobile } = useContext(ThemeContext)
    return (
        <nav
            role="navigation"
            className={`flex mb-[46px] ${
                !isMobile ? 'px-5' : 'px-4'
            } items-center justify-between fixed w-full z-10 h-12 bg-background-start`}
        >
            <NavLink to="/">
                <img src={logo} />
            </NavLink>
            {isMobile ? (
                <Suspense fallback={false}>
                    <MobileMenu />
                </Suspense>
            ) : (
                <Suspense fallback={false}>
                    <DesktopMenu />
                </Suspense>
            )}
        </nav>
    )
}

export default Navbar

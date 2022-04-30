import React, { useContext, lazy, Suspense } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import { ThemeContext } from '../../providers/ThemeContext'
import MobileMenuItems from './MobileMenuItems'
const MobileMenu = lazy(() => import('./MobileMenu'))
const DesktopMenu = lazy(() => import('./DesktopMenu'))
import logo from '/src/assets/mylo_navbarpng.png'

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth)
  const { isMobile, isOpen, handleMenuToggle } = useContext(ThemeContext)
  return (
    <nav
      role="navigation"
      className={`flex mb-[46px] ${
        !isMobile ? 'px-5' : 'px-4'
      } items-center justify-between fixed w-full z-10 h-12 bg-primary-darker`}
    >
      <NavLink to="/">
        <img src={logo} width="114" height="44" />
      </NavLink>
      <div>
        {isMobile ? (
          <div className="flex gap-4 items-center">
            {user ? (
              <img
                width="40"
                height="40"
                src={user.photoURL!}
                className="rounded-full"
              />
            ) : null}
            <Suspense fallback={false}>
              <MobileMenu />
            </Suspense>
          </div>
        ) : (
          <Suspense fallback={false}>
            <DesktopMenu />
          </Suspense>
        )}
      </div>
      {isOpen ? (
        <Suspense fallback={null}>
          <MobileMenuItems toggle={handleMenuToggle} />
        </Suspense>
      ) : null}
    </nav>
  )
}

export default Navbar

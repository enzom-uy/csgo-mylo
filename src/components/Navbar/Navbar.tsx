import React, { useContext, lazy, Suspense, memo } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import { ThemeContext } from '../../providers/index.providers'
import { MobileMenuItems } from '../index.components'
const MobileMenu = lazy(() => import('./MobileMenu'))
const DesktopMenu = lazy(() => import('./DesktopMenu'))
import logo from '/src/assets/mylo_navbarpng.png'

export const Navbar: React.FC = () => {
  const [user] = useAuthState(auth)
  const { isMobile, isOpen, handleMenuToggle } = useContext(ThemeContext)
  console.log('Navbar rendered.')
  return (
    <nav
      role="navigation"
      className={`flex mb-[46px] ${
        !isMobile ? 'px-5' : 'px-4'
      } items-center justify-between fixed w-full z-10 h-12 bg-primary-darker`}
    >
      <NavLink to="/">
        <img src={logo} width="114" height="44" alt="Mylo nades website logo" />
      </NavLink>
      <div>
        {isMobile ? (
          <div className="flex gap-4 items-center">
            {user ? (
              <img
                width="30"
                height="30"
                src={user.photoURL!}
                className="rounded-full"
                alt="User profile picture"
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

export const MemoedNavbar = memo(Navbar)

export default MemoedNavbar

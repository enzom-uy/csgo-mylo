import React, { lazy, Suspense, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import { MobileMenuItems } from '../index.components'
const MobileMenu = lazy(() => import('./MobileMenu'))
const DesktopMenu = lazy(() => import('./DesktopMenu'))
import logo from '/src/assets/mylo_navbarpng.png'
import useMediaQuery from 'use-mediaquery'

export const Navbar: React.FC = () => {
  const [user] = useAuthState(auth)
  const isMobile = useMediaQuery('(max-width: 970px)')
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }
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
              <MobileMenu isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
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

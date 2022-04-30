import React, { useContext, lazy, Suspense } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import { ThemeContext } from '../../providers/ThemeContext'
const MobileMenu = lazy(() => import('./MobileMenu'))
const DesktopMenu = lazy(() => import('./DesktopMenu'))
import logo from '/src/assets/mylo_navbarpng.png'

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth)
  const { isMobile } = useContext(ThemeContext)
  return (
    <nav
      role="navigation"
      className={`flex mb-[46px] ${
        !isMobile ? 'px-5 py-7' : 'px-4'
      } items-center justify-between fixed w-full z-10 h-12 bg-primary-darker`}
    >
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <div>
        {isMobile ? (
          <div className="flex gap-4 items-center">
            {user ? (
              <div className="w-9 rounded-full overflow-hidden">
                <img src={user.photoURL!} />
              </div>
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
    </nav>
  )
}

export default Navbar

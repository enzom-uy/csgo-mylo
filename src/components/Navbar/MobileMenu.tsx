import React, { lazy, Suspense, useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeContext'
import { MdMenu, MdClose } from 'react-icons/md'
const MobileMenuItems = lazy(() => import('./MobileMenuItems'))

const MobileMenu: React.FC = () => {
    const { isOpen, handleMenuToggle } = useContext(ThemeContext)
    return (
        <div>
            {!isOpen ? (
                <MdMenu
                    className="text-[2rem] text-text-color cursor-pointer"
                    aria-label="Hamburguer menu"
                    onClick={handleMenuToggle}
                />
            ) : (
                <MdClose
                    className="text-[2rem] text-text-color cursor-pointer"
                    aria-label="Hamburguer menu"
                    onClick={handleMenuToggle}
                />
            )}
            {isOpen ? (
                <Suspense fallback={null}>
                    <MobileMenuItems />
                </Suspense>
            ) : null}
        </div>
    )
}

export default MobileMenu

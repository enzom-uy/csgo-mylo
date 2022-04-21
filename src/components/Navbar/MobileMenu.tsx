import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeContext'
import { MdMenu, MdClose } from 'react-icons/md'
const MobileMenu: React.FC = () => {
    const { isOpen, handleMenuToggle } = useContext(ThemeContext)
    return (
        <div>
            {!isOpen ? (
                <MdMenu
                    className="text-[2rem] text-mobile-text cursor-pointer"
                    onClick={handleMenuToggle}
                />
            ) : (
                <MdClose
                    className="text-[2rem] text-mobile-text cursor-pointer"
                    onClick={handleMenuToggle}
                />
            )}
        </div>
    )
}

export default MobileMenu

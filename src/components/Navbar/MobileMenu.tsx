import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeContext'
import { MdMenu, MdClose } from 'react-icons/md'
import MobileMenuItems from './MobileMenuItems'

const MobileMenu: React.FC = () => {
    const { isOpen, handleMenuToggle } = useContext(ThemeContext)
    return (
        <div>
            {!isOpen ? (
                <MdMenu
                    className="text-[2rem] text-text-color cursor-pointer"
                    onClick={handleMenuToggle}
                />
            ) : (
                <MdClose
                    className="text-[2rem] text-text-color cursor-pointer"
                    onClick={handleMenuToggle}
                />
            )}
            {isOpen ? <MobileMenuItems /> : ''}
        </div>
    )
}

export default MobileMenu

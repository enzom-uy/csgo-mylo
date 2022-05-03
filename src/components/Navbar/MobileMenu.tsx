import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/index.providers'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const MobileMenu: React.FC = () => {
  const { isOpen, handleMenuToggle } = useContext(ThemeContext)
  return (
    <div>
      {!isOpen ? (
        <AiOutlineMenu
          className="text-[1.5rem] text-text-color cursor-pointer"
          aria-label="Hamburguer menu"
          onClick={handleMenuToggle}
        />
      ) : (
        <AiOutlineClose
          className="text-[1.5rem] text-text-color cursor-pointer"
          aria-label="Hamburguer menu"
          onClick={handleMenuToggle}
        />
      )}
    </div>
  )
}

export default MobileMenu

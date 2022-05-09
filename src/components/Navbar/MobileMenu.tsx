import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/index.providers'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const MobileMenu: React.FC = () => {
  const { isOpen, handleMenuToggle } = useContext(ThemeContext)
  return (
    <button onClick={handleMenuToggle}>
      {!isOpen ? (
        <AiOutlineMenu
          className="text-[1.5rem] text-text-color cursor-pointer"
          aria-label="Hamburguer menu"
        />
      ) : (
        <AiOutlineClose
          className="text-[1.5rem] text-text-color cursor-pointer"
          aria-label="Hamburguer menu"
        />
      )}
    </button>
  )
}

export default MobileMenu

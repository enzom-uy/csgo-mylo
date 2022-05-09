import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

interface IProps {
  isOpen: boolean
  handleMenuToggle: () => void
}

export const MobileMenu: React.FC<IProps> = ({ isOpen, handleMenuToggle }) => {
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

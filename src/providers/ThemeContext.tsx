import React, { useState, createContext } from 'react'
import useMediaQuery from 'use-mediaquery'
import { ThemeContextValue } from './types'

interface Props {
    children: React.ReactNode
}

const defaultState = {
    isMobile: true,
    isMenuOpen: false
}
export const ThemeContext = createContext<ThemeContextValue>(defaultState)
const { Provider } = ThemeContext

const ThemeContextProvider = ({ children }: Props) => {
    const isMobile = useMediaQuery('(max-width: 970px)')
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuToggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }
    const contextValue = {
        isMobile,
        handleMenuToggle,
        isOpen
    }
    return <Provider value={contextValue}>{children}</Provider>
}

export default ThemeContextProvider

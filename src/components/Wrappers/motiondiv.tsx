import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
  children: React.ReactNode | JSX.Element
  className: string
}

export const MotionDiv: React.FC<IProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.001 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv

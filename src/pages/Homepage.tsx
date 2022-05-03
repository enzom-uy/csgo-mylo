import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from '../components/index.components'
import mapasimg from '/src/assets/card_mapas.png'
import { motion } from 'framer-motion'

export const Homepage: React.FC = () => {
  return (
    <motion.main
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.001 }}
    >
      <h1
        role="heading"
        className="text-text-color text-3xl font-semibold drop-shadow-heading mb-12"
      >
        MYLO NADES
      </h1>
      <div>
        <NavLink to="/mapas">
          <Card title="Mapas" img={mapasimg} />
        </NavLink>
      </div>
    </motion.main>
  )
}

export default Homepage

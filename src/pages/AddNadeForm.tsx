import React from 'react'
import Form from '../components/Form/form'
import NadeGuide from '../components/NadeGuide/nadeguide'
import { motion } from 'framer-motion'

const AddNadeForm: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 pt-28 424:pt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.001 }}
    >
      <NadeGuide />
      <div className="w-[90%]">
        <Form />
      </div>
    </motion.div>
  )
}

export default AddNadeForm

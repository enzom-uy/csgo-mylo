import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import ClipLoader from 'react-spinners/ClipLoader'
const Form = lazy(() => import('../components/Form/form'))
const NadeGuide = lazy(() => import('../components/NadeGuide/nadeguide'))

const AddNadeForm: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 pt-28 424:pt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.001 }}
    >
      <Suspense fallback={<ClipLoader color="#406E8E" />}>
        <NadeGuide />
        <div className="w-[90%]">
          <Form />
        </div>
      </Suspense>
    </motion.div>
  )
}

export default AddNadeForm

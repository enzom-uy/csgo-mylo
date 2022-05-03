import React, { lazy, Suspense } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { MotionDiv } from '../components/index.components'
const Form = lazy(() => import('../components/Form/form'))
const NadeGuide = lazy(() => import('../components/NadeGuide/nadeguide'))

export const AddNadeForm: React.FC = () => {
  return (
    <MotionDiv className="flex flex-col items-center gap-8 pt-28 424:pt-0">
      <Suspense fallback={<ClipLoader color="#406E8E" />}>
        <NadeGuide />
        <div className="w-[90%]">
          <Form />
        </div>
      </Suspense>
    </MotionDiv>
  )
}

export default AddNadeForm

import React from 'react'
import Form from '../components/Form/form'
import NadeGuide from '../components/NadeGuide/nadeguide'

const AddNadeForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <NadeGuide />
      <div className="w-[90%]">
        <Form />
      </div>
    </div>
  )
}

export default AddNadeForm

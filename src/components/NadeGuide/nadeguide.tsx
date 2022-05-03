import React from 'react'
import Edit from './edit'
import Gfycat from './gfycat'
import Record from './record'

export const NadeGuide: React.FC = () => {
  return (
    <div className="max-w-[70ch] w-4/5">
      <h1 className="text-text-color font-medium text-2xl mb-4">
        Importante: cómo subir una granada.
      </h1>
      <div className="flex flex-col gap-4 max-w-[46h]">
        <Record />
        <Edit />
        <Gfycat />
      </div>
    </div>
  )
}

export default NadeGuide

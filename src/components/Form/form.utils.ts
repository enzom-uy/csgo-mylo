import { useRef } from 'react'

const formUtils = () => {
  const references = {
    nadeNameRef: useRef<HTMLInputElement>(null),
    nadeVideoUrl: useRef<HTMLInputElement>(null),
    mapRef: useRef<HTMLSelectElement>(null),
    nadeTypeRef: useRef<HTMLSelectElement>(null),
    locationRef: useRef<HTMLSelectElement>(null)
  }

  const initialState = {
    location: '',
    map: '',
    name: '',
    type: '',
    videoUrl: ''
  }

  return { references, initialState }
}

export default formUtils

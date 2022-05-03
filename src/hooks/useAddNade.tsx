import {
  flashesCollection,
  molosCollection,
  smokesCollection
} from '../firebase'
import { nadeData } from '../types/newNade'
import { useAxiosCall } from './index.hooks'

export const useAddNade = () => {
  const { doAxiosCall } = useAxiosCall()
  const addNade = async (type: string, data: nadeData) => {
    switch (type) {
      case 'smoke':
        doAxiosCall(data, smokesCollection)
        break
      case 'flash':
        doAxiosCall(data, flashesCollection)
        break
      case 'molo':
        doAxiosCall(data, molosCollection)
        break
      default:
        break
    }
  }
  return { addNade }
}

export default useAddNade

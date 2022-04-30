import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { addDoc, CollectionReference } from 'firebase/firestore'
import { nadeData } from '../types/newNade'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useAxiosCall = () => {
  const notifyLoading = () => toast.info('Subiendo la granada...')
  const notifySuccess = () =>
    toast.success('Granada subida!', { hideProgressBar: true })
  const doAxiosCall = async (
    data: nadeData,
    collection: CollectionReference
  ) => {
    axios
      .get(
        `https://api.gfycat.com/v1/gfycats/${data.videoUrl.replace(
          'https://gfycat.com/',
          ''
        )}`
      )
      .then(async (res) => {
        notifyLoading()
        const response = await res.data
        await addDoc(collection, {
          ...data,
          videoUrl: response.gfyItem.content_urls.mp4.url,
          id: uuidv4()
        })
        toast.dismiss()
        notifySuccess()
      })
      .catch((err) => {
        if (err.code === 'ERR_BAD_REQUEST') {
          toast.dismiss()
          const notifyError = () =>
            toast.error(
              'Error al subir la granada. Por favor, verifique la URL.'
            )
          notifyError()
        }
        console.log(err)
      })
  }
  return { doAxiosCall }
}

export default useAxiosCall

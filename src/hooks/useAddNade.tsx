import { addDoc } from 'firebase/firestore'
import {
  flashesCollection,
  molosCollection,
  smokesCollection
} from '../firebase'
import { nadeData } from '../types/newNade'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { useState } from 'react'

interface State {
  gfyItem: {
    content_urls: {
      mp4: {
        url: string
      }
    }
  }
}

const useAddNade = () => {
  const [video, setVideo] = useState({} as State)
  const addNade = async (type: string, data: nadeData) => {
    axios
      .get(`https://api.gfycat.com/v1/gfycats/${data.videoUrl}`)
      .then(async (res) => {
        const response = await res.data
        setVideo(response)
      })
    switch (type) {
      case 'smoke':
        axios
          .get(`https://api.gfycat.com/v1/gfycats/${data.videoUrl}`)
          .then(async (res) => {
            const response = await res.data
            setVideo(response)
            await addDoc(smokesCollection, {
              ...data,
              videoUrl: response.gfyItem.content_urls.mp4.url,
              id: uuidv4()
            })
          })
        break
      case 'flash':
        axios
          .get(`https://api.gfycat.com/v1/gfycats/${data.videoUrl}`)
          .then(async (res) => {
            const response = await res.data
            setVideo(response)
            await addDoc(flashesCollection, {
              ...data,
              videoUrl: response.gfyItem.content_urls.mp4.url,
              id: uuidv4()
            })
          })
        break
      case 'molo':
        axios
          .get(`https://api.gfycat.com/v1/gfycats/${data.videoUrl}`)
          .then(async (res) => {
            const response = await res.data
            setVideo(response)
            await addDoc(molosCollection, {
              ...data,
              videoUrl: response.gfyItem.content_urls.mp4.url,
              id: uuidv4()
            })
          })
        break
      default:
        break
    }
  }
  console.log(video)
  return { addNade, video }
}

export default useAddNade

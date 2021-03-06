import React, { useEffect, useState } from 'react'
import { getDocs, query, where } from 'firebase/firestore'
import { smokesCollection } from '../firebase'
import { Nade } from '../interfaces/index.interfaces'
import ClipLoader from 'react-spinners/ClipLoader'

export const useGetSmokes = (
  location: string | undefined,
  map: string | undefined
) => {
  const [smokes, setSmokes] = useState<Array<Nade>>([])
  const [smokesFromLocation, setSmokesFromLocation] = useState<Array<Nade>>([])
  const [loadingSmokes, setLoadingSmokes] = useState<React.ReactNode>(
    <ClipLoader color="#406E8E" />
  )

  useEffect(() => {
    const querySmokes = getDocs(
      query(smokesCollection, where('map', '==', map))
    )
    querySmokes.then((res) => {
      const resArray = res.docs.map((doc) => doc.data() as Nade)
      const filteredArrayBaseOnLocation = resArray.filter(
        (smoke) => smoke.location === location
      )
      if (filteredArrayBaseOnLocation.length === 0) {
        setLoadingSmokes(
          <p className="text-text-color">No existen humos en esta categoría.</p>
        )
      } else {
        setSmokesFromLocation(filteredArrayBaseOnLocation)
        setSmokes(resArray)
        setLoadingSmokes(false)
      }
    })
  }, [])

  return { smokes, loadingSmokes, smokesFromLocation }
}

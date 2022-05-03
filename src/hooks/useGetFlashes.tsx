import React, { useEffect, useState } from 'react'
import { getDocs, query, where } from 'firebase/firestore'
import { flashesCollection } from '../firebase'
import { Nade } from '../interfaces/interfaces'
import ClipLoader from 'react-spinners/ClipLoader'

export const useGetFlashes = (
  location: string | undefined,
  map: string | undefined
) => {
  const [flashes, setFlashes] = useState<Array<Nade>>([])
  const [flashesFromLocation, setFlashesFromLocation] = useState<Array<Nade>>(
    []
  )
  const [loadingFlashes, setLoadingFlashes] = useState<React.ReactNode>(
    <ClipLoader color="#406E8E" />
  )

  useEffect(() => {
    const queryFlashes = getDocs(
      query(flashesCollection, where('map', '==', map))
    )
    queryFlashes.then((res) => {
      const resArray = res.docs.map((doc) => doc.data() as Nade)
      const filteredArrayBaseOnLocation = resArray.filter(
        (flash) => flash.location === location
      )
      if (filteredArrayBaseOnLocation.length === 0) {
        setLoadingFlashes(
          <p className="text-text-color">
            No existen flashes en esta categoría.
          </p>
        )
      } else {
        setFlashesFromLocation(filteredArrayBaseOnLocation)
        setFlashes(resArray)
        setLoadingFlashes(false)
      }
    })
  }, [])

  return { flashes, flashesFromLocation, loadingFlashes }
}

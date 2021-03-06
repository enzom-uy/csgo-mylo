import React, { useEffect, useState } from 'react'
import { getDocs, query, where } from 'firebase/firestore'
import { molosCollection } from '../firebase'
import { Nade } from '../interfaces/index.interfaces'
import ClipLoader from 'react-spinners/ClipLoader'

export const useGetMolos = (
  location: string | undefined,
  map: string | undefined
) => {
  const [molos, setMolos] = useState<Array<Nade>>([])
  const [molosFromLocation, setMolosFromLocation] = useState<Array<Nade>>([])
  const [loadingMolos, setLoadingMolos] = useState<React.ReactNode>(
    <ClipLoader color="#406E8E" />
  )

  useEffect(() => {
    const queryMolos = getDocs(query(molosCollection, where('map', '==', map)))
    queryMolos.then((res) => {
      const resArray = res.docs.map((doc) => doc.data() as Nade)
      const filteredArrayBaseOnLocation = resArray.filter(
        (molo) => molo.location === location
      )
      if (filteredArrayBaseOnLocation.length === 0) {
        setLoadingMolos(
          <p className="text-text-color">No existen molos en esta categoría.</p>
        )
      } else {
        setMolosFromLocation(filteredArrayBaseOnLocation)
        setMolos(resArray)
        setLoadingMolos(false)
      }
    })
  }, [])

  return { molos, molosFromLocation, loadingMolos }
}

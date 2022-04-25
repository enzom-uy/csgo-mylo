import React, { useEffect, useState } from 'react'
import { getDocs, query, where } from 'firebase/firestore'
import { molosCollection } from '../firebase'
import { Nade } from '../interfaces/interfaces'
import { ClipLoader } from 'react-spinners'

const useGetMolos = (location: string | undefined, map: string | undefined) => {
    const [molos, setMolos] = useState<Array<Nade>>([])
    const [molosFromLocation, setMolosFromLocation] = useState<Array<Nade>>([])
    const [loadingMolos, setLoadingMolos] = useState<React.ReactNode>(
        <ClipLoader color="#406E8E" />
    )

    useEffect(() => {
        const queryMolos = getDocs(
            query(molosCollection, where('map', '==', map))
        )
        queryMolos.then((res) => {
            const resArray = res.docs.map((doc) => doc.data() as Nade)
            const filteredArrayBaseOnLocation = resArray.filter(
                (molo) => molo.location === location
            )
            if (filteredArrayBaseOnLocation.length === 0) {
                setLoadingMolos('No existen molos en esta categoría.')
            } else {
                setMolosFromLocation(filteredArrayBaseOnLocation)
                setMolos(resArray)
                setLoadingMolos(false)
            }
        })
    }, [])

    return { molos, molosFromLocation, loadingMolos }
}

export default useGetMolos

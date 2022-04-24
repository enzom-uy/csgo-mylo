import { useEffect, useState } from 'react'
import { getDocs, query, where } from 'firebase/firestore'
import { flashesCollection, smokesCollection } from '../firebase'

interface Nade {
    name: string
    videoUrl: string
    type: string
    id: string
    location: string
}

const useGetSmokes = (location: string | undefined) => {
    const [smokes, setSmokes] = useState<Array<Nade>>([])
    const [flashes, setFlashes] = useState<Array<Nade>>([])
    const [molos, setMolos] = useState<Array<Nade>>([])

    useEffect(() => {
        const querySmokes = getDocs(
            query(smokesCollection, where('location', '==', location))
        )
        querySmokes.then((res) => {
            const resArray = res.docs.map((doc) => doc.data() as Nade)
            setSmokes(resArray)
        })
        const queryFlashes = getDocs(
            query(flashesCollection, where('location', '==', location))
        )
        queryFlashes.then((res) => {
            const resArray = res.docs.map((doc) => doc.data() as Nade)
            setFlashes(resArray)
        })
    }, [])

    return { smokes, flashes }
}

export default useGetSmokes

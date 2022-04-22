import React, { useEffect, useState } from 'react'
import { getDocs, query, where } from 'firebase/firestore'
import { nadesCollection } from '../firebase'

interface Smoke {
    name: string
    videoUrl: string
    type: string
    id: number
}

const useGetSmokes = () => {
    const [smokes, setSmokes] = useState<Array<Smoke>>([])

    useEffect(() => {
        const queryAllSmokes = getDocs(
            query(nadesCollection, where('type', '==', 'smoke'))
        )
        queryAllSmokes.then((res) => {
            const resArray = res.docs.map((doc) => doc.data() as Smoke)
            console.log(resArray)
            setSmokes(resArray)
        })
    }, [])

    return { smokes }
}

export default useGetSmokes

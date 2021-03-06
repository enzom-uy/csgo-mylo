import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAC1A-dOX1zYsb6dXevguJ8B1ZFEoteK2w',
    authDomain: 'csgo-mylo.firebaseapp.com',
    projectId: 'csgo-mylo',
    storageBucket: 'csgo-mylo.appspot.com',
    messagingSenderId: '912274474583',
    appId: '1:912274474583:web:730df268bd3b53fc480512'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app)

export const molosCollection = collection(db, 'molo')
export const flashesCollection = collection(db, 'flash')
export const smokesCollection = collection(db, 'smoke')

export default db

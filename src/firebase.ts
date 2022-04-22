import { initializeApp } from 'firebase/app'
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
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const molosCollection = collection(db, 'molos')
export const flashesCollection = collection(db, 'flashes')
export const humosCollection = collection(db, 'humos')

export default db

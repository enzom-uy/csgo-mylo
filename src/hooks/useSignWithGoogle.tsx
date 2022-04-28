import { app, auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const provider = new GoogleAuthProvider()

const useSignWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res)
            const token = credential?.accessToken
            const userId = res.user.uid
            const userName = res.user.displayName
        })
        .catch((err) => {
            const errorCode = err.code
            const errorMessage = err.message
            const email = err.email
            const credential = GoogleAuthProvider.credentialFromError(err)
        })
}

export default useSignWithGoogle

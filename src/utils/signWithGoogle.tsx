import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const provider = new GoogleAuthProvider()

const signWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res)
      const token = credential?.accessToken
      const userId = res.user.uid
      const userName = res.user.displayName
      const notifyLogged = () => toast.success(`Bienvenido, ${userName}`)
      notifyLogged()
    })
    .catch((err) => {
      const errorCode = err.code
      const errorMessage = err.message
      const email = err.email
      const credential = GoogleAuthProvider.credentialFromError(err)
    })
}

export default signWithGoogle

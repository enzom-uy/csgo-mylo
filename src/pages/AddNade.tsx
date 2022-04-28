import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import useSignWithGoogle from '../hooks/useSignWithGoogle'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { ClipLoader } from 'react-spinners'

const AddNade: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)
  return (
    <div>
      {loading === true ? (
        <ClipLoader />
      ) : user !== null ? (
        <p className="text-text-color">
          Ya estás iniciado sesión,{' '}
          <span className="text-red-500">{user?.email}</span>
        </p>
      ) : (
        <div className="flex flex-col">
          <h1 className="text-text-color text-2xl font-medium">
            Antes de agregar una nade debes iniciar sesión.
          </h1>
          <h2 className="text-text-color text-md mb-4">
            Utiliza alguno de los siguientes métodos:
          </h2>
          <button
            onClick={useSignWithGoogle}
            className="flex items-center justify-center gap-2 bg-white p-2 font-medium w-28"
          >
            Google <FcGoogle />
          </button>
        </div>
      )}
    </div>
  )
}

export default AddNade

import React from 'react'

const Record: React.FC = () => {
  return (
    <>
      <strong className="text-text-color">
        1. Grabar la nade desde tu propio juego.
      </strong>
      <p className="text-text-color">
        Necesitas grabar la granada usando tu aplicación de preferencia.
        <br />
        Las recomendadas son:{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://obsproject.com/es/download"
          className="hover:underline text-red-500"
        >
          OBS
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.nvidia.com/en-us/geforce/geforce-experience/"
          className="hover:underline text-red-500"
        >
          Nvidia GeForce Experience
        </a>
        .
      </p>
    </>
  )
}

export default Record

import React from 'react'

const Edit: React.FC = () => {
  return (
    <>
      <strong className="text-text-color">
        2. (Recomendado) Editar el video
      </strong>
      <p className="text-text-color">
        No es algo obligatorio, pero al momento de subir una granada sería mejor
        subir el video editado (zoom a la referencia de la mira, aclaraciones,
        etc).
        <br />
        También, si la referencia es algo complicada, considera usar la{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.csgonades.com/blog/smoke-align-crosshair"
          className="text-red-500 hover:underline"
        >
          mira especial para posicionamiento de granadas
        </a>
        .
      </p>
    </>
  )
}

export default Edit

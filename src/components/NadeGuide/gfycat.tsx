import React from 'react'

const Gfycat: React.FC = () => {
  return (
    <>
      <strong className="text-text-color">
        3. Crearte una cuenta en{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://gfycat.com/"
          className="text-red-500 hover:underline"
        >
          Gfycat
        </a>{' '}
        y subir el video.
      </strong>
      <p className="text-text-color">
        MYLO Nades usa la{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://developers.gfycat.com/"
          className="text-red-500 hover:underline"
        >
          API de Gfycat
        </a>{' '}
        para cargar los videos directamente de la página a la app. Una ves
        tengas la cuenta hecha y el video subido, copia el link (ejemplo:{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://gfycat.com/hatefuloptimalhyena"
          className="hover:underline text-red-500"
        >
          https://gfycat.com/hatefuloptimalhyena
        </a>
        ) y úsalo en el siguiente formulario:
      </p>
    </>
  )
}

export default Gfycat

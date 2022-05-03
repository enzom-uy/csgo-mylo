import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-darker min-h-24 px-10 py-6 mt-20">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col justify-start">
          <h1 className="font-bold tracking-wide text-text-color">
            MYLO NADES - USEFUL UTILITIES FOR EACH MAP
          </h1>
          <p className="text-xs text-text-color">
            made with ❤️ by{' '}
            <a
              href="https://twitter.com/enzom_dev"
              className="hover:underline text-red-400"
            >
              @enzom_dev
            </a>{' '}
            | Github:{' '}
            <a
              href="https://github.com/enzom-uy"
              className="hover:underline text-red-400"
            >
              enzom-uy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

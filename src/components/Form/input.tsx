import React from 'react'

interface Props {
  htmlFor: string
  labelText: string
  type: string
  value?: string
  reference: React.RefObject<HTMLInputElement>
  handler?: () => void
}

export const Input: React.FC<Props> = ({
  htmlFor,
  labelText,
  type,
  reference,
  handler,
  value
}) => {
  return (
    <div className="relative w-full mb-6 group">
      <input
        type={type}
        id={htmlFor}
        placeholder=" "
        onChange={handler}
        ref={reference}
        value={value}
        autoComplete="off"
        className="block py-2.5 px-0 w-full text-md text-black bg-transparent
        border-0 border-b-2 border-gray-300 appearance-none dark:text-black
        dark:border-gray-600 dark:focus:border-blue-500
        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor={htmlFor}
        className="peer-focus:font-medium absolute
        text-sm text-black dark:text-gray-700 duration-300
        transform -translate-y-6 scale-75 top-3 -z-10
        origin-[0] peer-focus:left-0 peer-focus:text-blue-600
        peer-focus:dark:text-black peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {labelText}
      </label>
    </div>
  )
}

export default Input

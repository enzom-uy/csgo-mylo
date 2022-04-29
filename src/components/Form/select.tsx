import React, { ChangeEvent } from 'react'

interface Props {
  htmlFor: string
  labelText: string
  initialOption: string
  children: React.ReactNode
  handler?: () => void
  eventHandler?: (e: ChangeEvent<HTMLSelectElement>) => void
  reference?: React.RefObject<HTMLSelectElement>
  value: string
}

const Select: React.FC<Props> = ({
  htmlFor,
  labelText,
  initialOption,
  children,
  handler,
  reference,
  eventHandler,
  value
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {labelText}
      </label>
      <select
        id={htmlFor}
        onChange={handler || eventHandler}
        ref={reference}
        value={value}
        className="bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option
          value=""
          disabled
          className="border border-gray-300 text-gray-400"
        >
          {initialOption}
        </option>
        {children}
      </select>
    </div>
  )
}

export default Select

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
    <div>
      <label htmlFor={htmlFor} className="block">
        {labelText}
      </label>
      <select
        id={htmlFor}
        onChange={handler || eventHandler}
        ref={reference}
        value={value}
      >
        <option value="" disabled>
          {initialOption}
        </option>
        {children}
      </select>
    </div>
  )
}

export default Select

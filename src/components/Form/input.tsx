import React from 'react'

interface Props {
  htmlFor: string
  labelText: string
  type: string
  value?: string
  placeholder: string
  reference: React.RefObject<HTMLInputElement>
  handler?: () => void
}

const Input: React.FC<Props> = ({
  htmlFor,
  labelText,
  type,
  placeholder,
  reference,
  handler,
  value
}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="block">
        {labelText}
      </label>
      <input
        type={type}
        id={htmlFor}
        placeholder={placeholder}
        onChange={handler}
        ref={reference}
        value={value}
      />
    </div>
  )
}

export default Input

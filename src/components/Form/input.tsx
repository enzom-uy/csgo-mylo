import React from 'react'

interface Props {
  htmlFor: string
  labelText: string
  type: string
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
  handler
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
      />
    </div>
  )
}

export default Input

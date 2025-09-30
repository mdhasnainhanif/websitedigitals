import React from 'react'

const Input = ({ name, id, placeholder, required }) => {
  return (
      <input type="text" name={name} id={id} placeholder={placeholder} required={required} className='basicInput' />
  )
}

export default Input

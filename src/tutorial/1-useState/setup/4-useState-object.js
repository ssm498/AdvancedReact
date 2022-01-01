import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: '24',
    message: 'Random Message',
  })
  const changeMessage = () => {
    // If we change this to something like a string, all the attributes of the object get turned to 'undefined'. This new thing wont be an object, but a string.
    // The other solution MIGHT be to set person.message = "some string", but the other 2 attributes will get wiped out.
    // Solution is to use SPREAD OPERATORS
    setPerson({ ...person, message: 'New Random Message' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject

import React, { useState } from 'react' // Must have the curly braces because this is a named export
// NOTES***
// Hooks will always start with 'use'
// Component name where we use the hook must be uppercase
// Hook must be in the function of component body
// Cannot call the hook conditionally

const UseStateBasics = () => {
  // const value = useState(1)[0]
  // const handler = useState(1)[1]; // Handler is the function that controls the ////'v//// 'value's' state.
  const [text, setText] = useState('Random Title')

  const handleClick = () => {
    if (text === 'Hello World') {
      setText('Random Title')
    } else {
      setText('Hello World')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics

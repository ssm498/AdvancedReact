import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator  -- {isError ? :}

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  //const firstValue = text || 'hello world'
  //const secondValue = text && 'hello world'
  // (Short-circuit Eval) If text is a false-state, || returns the second operand, if text is true-state, then it will return text. For &&, its the oposite, false returns first value, true returns second.

  return (
    <>
      <h1>{text || 'Default Value'}</h1>
      <button
        className='btn'
        onClick={() => {
          setIsError(!isError)
        }}
      >
        Toggle Error
      </button>
      {text && <h1>'Text' was TRUE</h1>}
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error...</p> : <div>There is no error</div>}
    </>
  )
}
// {!text && <h1>'Text' was NOT TRUE</h1>}
export default ShortCircuit

import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render (unlike useEffect)
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }
  // We can use this technique to create focus on an element
  useEffect(() => {
    refContainer.current.focus()
  })
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>Submit </button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  )
}

export default UseRefBasics

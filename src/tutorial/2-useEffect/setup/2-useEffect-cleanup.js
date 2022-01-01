import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  // The issue is use affect re-renders to much, eating into our memory
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    // Solution is in our return - we will remove the event listener
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup

import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  // useEffect is used when we want to use 'side affects' where values outside the current component may need changing. ie: data fetching, listening for events, signing up for subscriptions ect.
  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  }, [value]) // Second parameter is array of dependencies. If we leave blank then it will only run the initial render.
  // Adding a 'value' will allow useEffect to run each time the 'value' is updated. Kind of like an 'event listener'?
  // You can add more than one useEffect that changes with other events.
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  )
}

export default UseEffectBasics

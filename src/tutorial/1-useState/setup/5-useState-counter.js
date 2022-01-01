import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const reset = () => {
    setValue(0)
  }
  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1)
      setValue((prevValue) => {
        return prevValue + 1
      })
    }, 2000) // First part is the callback function, the second is time in ms
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter

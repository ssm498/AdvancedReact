import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault() // prevents the auto refresh
    if (firstName && email) {
      // console.log('Submit the Form')
      const person = { id: new Date().getTime().toString, firstName, email }
      setPeople((people) => {
        // people is current value of the state
        return [...people, person]
      })
      // Resetting the fields
      setFirstName('')
      setEmail('')
    } else {
      console.log('Empty Value')
    }
  }
  // Can also use onClick instead of onSubmit. onSubmit is native to form
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Add Person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs

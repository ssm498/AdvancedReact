import React from 'react' // If you dont want to import, you can type React.useState to invoke a React object. Similar to 'using namespace std' in C++?
import { useState } from 'react/cjs/react.development'
import { data } from '../../../data' // Up 3 folders and into

// NOTES ***
// Making the onClick an arrow function will avoid invoking onClick on page load

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  )
}

export default UseStateArray

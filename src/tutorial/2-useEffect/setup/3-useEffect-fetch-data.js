import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users) // ? We dont want to cause an infinit loop cause each time you triger setUser, you trigger a re-render, which calls getUsers, which start setUser. Solution is to add the dependency array
  }
  // Hook
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h3>GitHub Users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData

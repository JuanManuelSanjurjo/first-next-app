/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Users from '@/components/Users'

async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json() 

  return data.data
}


async function HomePage() {

  const users = await fetchUsers()
  return (
    <Users users={users}/>
  )
}

export default HomePage
"use client"

import Link from 'next/link'
import React from 'react'

function Users({users}) {
  return (
    <ul>{
        users.map( user => (
          <Link href={`/users/${user.id}`} key={user.id}>
          <li  className='bg-slate-900 rounded-sm p-4 mb-4 m-auto flex justify-between gap-4  hover:translate-x-[5%]  transition-all '>
            <div>
              <h5 className='font-bold'>{user.id} {user.first_name} {user.last_name}</h5>
              <p className='text-slate-300'>Email: {user.email} </p>
            </div>
              <img src={user.avatar} className='rounded-full w-20' alt=''></img>
          </li>

            </Link>
        ))
      }</ul>
  )
}

export default Users
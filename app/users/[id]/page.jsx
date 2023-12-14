async function fetchUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()

    return data.data
}


import React from 'react'

async function UserPage({params}) {
  
    const user = await fetchUser(params.id)

  return (
    <div className='bg-slate-900 flex w-1/3 h-1/3 rounded-xl justify-around items-center shadow-lg'>
        <div className='text-2xl font-bold'>
            <h2>{user.first_name}</h2>
            <h3>{user.last_name}</h3>
            <h5 className='text-slate-300 text-lg '>{user.email}</h5>
        </div>
        <div>
            <img src={user.avatar} className='rounded-full' alt=''></img>
        </div>
    
    
    </div>
  )
}

export default UserPage;
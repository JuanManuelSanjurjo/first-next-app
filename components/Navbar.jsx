import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex bg-slate-900 h-[4rem] flex justify-start gap-10 items-center px-20 text-2xl uppercase'>
        <Link href={"/"}>Home</Link>

       <ul>
            <li>
                <Link href={"/about"}>About</Link>
            </li>
       </ul>

    </nav>
  )
}

export default Navbar
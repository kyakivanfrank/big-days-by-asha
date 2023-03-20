import React, { useState } from 'react'
import { DropButton } from './DropButton'

const Nav = ({isOpen}) => {


  return (
    <nav style={{ display: isOpen ? "block" : "none" }} className='w-9/12 h-screen absolute bg-slate-50 ' >
        <ul className='h-auto pt-20 pb-60'>
            <li className="mx-4 py-4 bd-line">HOME</li>
            <li className="mx-4 py-4 bd-line">
            <div className='flex justify-between'>PARTY
            <DropButton/>
             </div>
             </li>
             <ul className='ul-inside py-3 bd-line'>
            <li className="px-4  py-1 hover:bg-slate-500">BIRTHDAY</li>
            <li className="px-4  py-1 hover:bg-slate-500">NIKHA</li>
            <li className="px-4  py-1 hover:bg-slate-500">WEDDING</li>
            <li className="px-4  py-1 hover:bg-slate-500">BABY SHOWER</li>
            </ul>
             
            <li className="mx-4 py-4 bd-line">ABOUT</li>
            <li className="mx-4 py-4 bd-line">CONTACT</li>
        </ul>
        
    </nav>
  )
}

export default Nav
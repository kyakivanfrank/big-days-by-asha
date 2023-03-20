import React from 'react'
import dropdown from '../../assets/drop-down.svg'
export const DropButton = () => {
  return (
    <>
    <img src={dropdown} alt="drop down" className="w-5 flex space-between" />

    <ul>
      <li className="py-2">wedding</li>
      <li className="py-2"></li>
      <li className="py-2">wedding</li>
      <li className="py-2">wedding</li>
    </ul>
    
    </>


  )
}

import React, {useState} from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import logo from "../../assets/shopping-bag.svg"
import Nav from './Nav'

const Header = () => {
    const [isOpen, setOpen] = useState(false)

  return (
  <>
      <Nav isOpen={isOpen} />
    <header className='w-11/12 mx-auto z-30'>
      <div className='flex justify-between py-2'>
      <span className='z-50 burger'><Hamburger size={25} toggled={isOpen} toggle={setOpen} /></span>
      <h1 className="text-2xl">BIG DAYS BY ASHA</h1>
      <img className="w-7" src={logo} alt="logo" />
      </div>
    </header>
    
    </>
    
  )
}

export default Header
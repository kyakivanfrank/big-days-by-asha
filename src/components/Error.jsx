import React from 'react'
import errorImage from "../assets/big-days-by-asha-logo.svg"

const Error = () => {
  return (
    <>
    <img className="w-36 lg:w-64 mx-auto py-16" src={errorImage} alt='error image'/>
    <h1 className="text-center text-2xl font-extrabold text-red-700 lg:text-6xl m-8">SORRY, THIS PAGE DOESN'T EXIST!</h1>
    
    
    
    </>
  )
}

export default Error
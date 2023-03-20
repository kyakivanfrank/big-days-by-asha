import React, { useRef, useState, useLayoutEffect } from 'react'
import involvement_img from '../../assets/panaroma.png'

export const Involvement = () => {
  // const [imgsize, setImgsize] =useState(false)

  // useLayoutEffect(() => {
  //   const dimension = imageRef.current.style.getBoundingClientRect();
  //   console.log(dimension)
  // }, [imgsize])
  //  here you have to use uref and use layout

  return (
    <div>
        <img id="involvement_img"
        //  ref={imageRef}
          src={involvement_img} alt="involvement image" className="h-screen mx-auto object-cover" />
          <div className='w-screen bg-white '> 
this is  it



          </div>
    </div>
  )
}

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import involvement_img from '../../assets/panaroma.png'

export const Involvement = () => {

  const [controlClass, setControlClass ] = useState()
  const imageRef = useRef(null)

  useLayoutEffect(() => {
    const { width } = imageRef.current.getBoundingClientRect()
    imageRef.current.classList.value = controlClass 
    width < screen.width ? setControlClass('w-screen mx-auto obj object-cover') : 
     setControlClass('h-screen mx-auto obj object-cover')
    console.log(controlClass)
    
  }, [controlClass])

  return (
    <div>
        <img id="involvement_img" ref={imageRef} src={involvement_img} alt="involvement image" className='w-screen mx-auto obj object-cover' />
          {/* <div className='w-screen bg-white '> this is  it</div> */}
    </div>
  )
}

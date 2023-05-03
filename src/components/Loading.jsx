import React from 'react'
import logo from '../assets/big-days-by-asha-logo.svg'
import white from '../assets/logo pieces/spinner/white.svg'
import blue from '../assets/logo pieces/spinner/blue.svg'
import green from '../assets/logo pieces/spinner/green.svg'
import red from '../assets/logo pieces/spinner/red.svg'

export default function Loading() {
    return (
       
 <div className='gradCheck load-spinner h-screen w-screen'>


<div className='middled  mx-auto my-auto rounded-xl absolute inset-x-20 inset-y-2 flex-col'>

    <div className='center'>
        <img className='w-4/5 mx-auto pb-4' src={logo} />
        <h5 className='text-lg font-bold pl-2 text-center'>We create, you celebrate</h5>
    </div>

    <div id='spinner' class="relative pt-10 w-20 load-spinner mx-auto">
        <img id="blue-spinner" className=" absolute animate-spin-slow" src={blue} />
        <img id="green-spinner" className="absolute animate-spin-medium" src={green} />
        <img id="red-spinner" className=" absolute animate-spin-fast" src={red} />
        <img class="absolute" src={white} />
    </div>

</div>
</div>
    )
}



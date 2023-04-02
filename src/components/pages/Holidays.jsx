import React from 'react'
import more from '../../assets/more_arrow.svg'
import banner from '../../assets/banner.jpg'

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc : banner,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  }

]

export const Holidays = () => {
  return (
<div className="bg-gray-100 ">
      <div className="mx-auto md:max-w-7xl lg:px-8 md:px-20 lg:pt-4">
            {callouts.map((callout, index) => <div key={index} className="h-64 shadow-lg relative w-full group overflow-hidden lg:rounded-xl group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:h-80 lg:aspect-w-1 lg:aspect-h-1">
            {/* <h3 className="absolute top-1/2 right-1/2 z-2 text-center text-4xl font-semibold text-gray-900">{callout.name}</h3> */}
                  <img src={callout.imageSrc} alt={callout.imageAlt} className=" h-full w-full object-cover object-center" />
                </div>
            )}
            </div>
    </div>


  )
}

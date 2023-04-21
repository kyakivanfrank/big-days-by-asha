import React, { useContext, useEffect } from 'react'
import more from '../../assets/more_arrow.svg'
import banner from '../../assets/banner.jpg'
import { OurContext } from '../../Root'

const callouts = [
  {
    name: `Let's make Easter memorable`,
    description: 'Work from home accessories',
    imageSrc : banner,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  }

]

export const Holidays = () =>  {
const { promotionalOffers } = useContext(OurContext)

console.table(promotionalOffers)


  return (
<div className="bg-gray-100 ">
      <div className="mx-auto md:max-w-7xl lg:px-8 md:px-20 lg:pt-4">
            {callouts.map((callout, index) => <div key={index} className="h-64 shadow-lg relative w-full group overflow-hidden lg:rounded-xl group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:h-80 lg:aspect-w-1 lg:aspect-h-1">
                  <img src={callout.imageSrc} alt={callout.imageAlt} className=" h-full w-full object-cover object-center" />
            <h3 className="absolute top-1/4 lg:right-1/2 z-2 text-center text-4xl font-bold text=black">{callout.name}</h3>

                </div>
            )}
            </div>
    </div>


  )
}

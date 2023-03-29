import React from 'react'
import more from '../../assets/more_arrow.svg'
import categoryImg from '../../assets/panaroma.jpg'


import birthday from '../../assets/categories/birthday.svg'
import surprise from '../../assets/categories/surprise.svg'
import babyshower from '../../assets/categories/babyshower.svg'
import anniversary from '../../assets/categories/anniversary.svg'
import Personalized from '../../assets/categories/personalized.svg'
import hamper from '../../assets/categories/hamper.svg'


const callouts = [
  {
    name: 'Birthday',
    description: 'Work from home accessories',
    imageSrc : birthday,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
    css: ''
  },
  {
    name: 'Baby shower',
    description: 'Journals and note-taking',
    imageSrc : babyshower,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
    css: ''
  },
  {
    name: 'Anniversary',
    description: 'Journals and note-taking',
    imageSrc : anniversary,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
    css: ''
  },
  {
    name: 'Surprise',
    description: 'Journals and note-taking',
    imageSrc : surprise,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
    css: ''
  }, {
    name: 'Hamper',
    description: 'Journals and note-taking',
    imageSrc : hamper,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
    css: ''
  },
  {
    name: 'Personalized',
    description: 'Daily commute essentials',
    imageSrc : Personalized,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    css: ''
  },
]

// here we will used icons to represent each cateogir which will later lead to a shopping cart and a check out page


export const Categories = () => {
  return (
<div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8  sm:py-12 lg:max-w-none lg:py-20">
          <h2 className="text-2xl font-bold text-gray-900">What's in plan</h2>

          <div className="mt-6 lg:flex mx-auto grid grid-cols-3 lg:gap-3 gap-2 justify-center">
            {callouts.map((callout, index) => (
              <div key={index} className={`p-4 bg-white rounded-lg ${callout.css}`}>
                <div className="mx-auto group-hover:opacity-75 ">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full p-3 object-cover object-center"
                  />
                </div>
                <h3 className="text-base text-center font-semibold text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>


  )
}

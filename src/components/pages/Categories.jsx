import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { OurContext } from '../../Root'


export const Categories = () => {
  const { categories } = useContext(OurContext)
  

  return <div className="bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-6 lg:max-w-none lg:py-8">
        <div className="mt-6  lg:flex mx-auto grid grid-cols-3 lg:gap-3 gap-2 justify-center">
          {categories.map((category, index) => <div key={index} className={`p-0 lg:p-5 hover:-translate-y-1 grayscale-30 opacity-70 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all shadow-lg bg-white rounded-lg ${category.css}`}>
            <Link to={`${category.id}`}>
              <div className="mx-auto group-hover:opacity-75 ">
                <img src={category.icon} alt={category.name} className="h-full icon-start w-full ease-in p-4 object-cover object-center" />
              </div>
              <h3 className="text-base text-center font-semibold pb-2 lg:pb-0 text-gray-900">
                {category.name}
              </h3>
            </Link>
          </div>
          )}
        </div>
      </div>
    </div>
  </div>
}

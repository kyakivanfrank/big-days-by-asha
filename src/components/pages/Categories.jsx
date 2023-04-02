import React, { useContext } from 'react'

import birthday from '../../assets/categories/birthday.svg'
import surprise from '../../assets/categories/surprise.svg'
import babyshower from '../../assets/categories/babyshower.svg'
import anniversary from '../../assets/categories/anniversary.svg'
import Personalized from '../../assets/categories/personalized.svg'
import hamper from '../../assets/categories/hamper.svg'
import { OurContext } from '../../App.jsx'


export const Categories = () => {
  const productList = useContext(OurContext)

  return <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 lg:max-w-none lg:py-8">
          <h2 className="text-2xl font-bold text-gray-900">What's in plan</h2>

          <div className="mt-6  lg:flex mx-auto grid grid-cols-3 lg:gap-3 gap-2 justify-center">
            {productList.map((product, index) => <div key={index} className={`p-0 lg:p-5 hover:-translate-y-1 graysc opacity-70 hover:grayscale-0 hover:scale-105 transition-all shadow-lg bg-white rounded-lg ${product.css}`}>
                <div className="mx-auto  group-hover:opacity-75 ">
                  <img src={product.icon} alt={product.name} className="h-full w-full p-4 object-cover object-center" />
                </div>
                <h3 className="text-base text-center font-semibold pb-2 lg:pb-0 text-gray-900">
                    {product.name}
                </h3>
              </div>
            )}
          </div>

          
        </div>
      </div>
    </div>
}

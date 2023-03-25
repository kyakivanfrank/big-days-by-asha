import React from 'react'
import more from '../../assets/more_arrow.svg'
import categoryImg from '../../assets/panaroma.jpg'


const callouts = [
  {
    itemName: 'Flower bouquet',
    price: 456,
    description: 'Work from home accessories',
    imageSrc : categoryImg,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    itemName: 'balloons',
    price: 456,
    description: 'Journals and note-taking',
    imageSrc : categoryImg,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    itemName: 'sweets and chocolate',
    price: 456,
    description: 'Journals and note-taking',
    imageSrc : categoryImg,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    itemName: 'cakes',
    price: 456,
    description: 'Journals and note-taking',
    imageSrc : categoryImg,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },


  {
    itemName: 'Travel',
    price: 456,
    description: 'Daily commute essentials',
    imageSrc : categoryImg,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]



export const Products = () => {
  return (

<div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-12">
          <h2 className="text-2xl font-bold text-gray-900">Products</h2>

          <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout, index) => (
              <div key={index} className="group relative">
                <div className="relative h-50 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full  object-cover object-center"
                  />
                </div>
                <h3 className="mt-2 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.itemName}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">AED {callout.price}</p>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>



    // <div className='w-11/12 mx-auto bg-slate-300 bg-opacity-20 p-2 border-2 rounded-md border-gray-300 border-opacity-50'>
    //     <section className='font-bold'>
    //         <div className="flex justify-between py-5">
    //         <h1 className='text-2xl'>WHAT'S IN PLAN TODAY</h1>
    //         <img src={more} className='w-5' alt="more"/>
    //         </div>
    //         {/* <h5 className='py-3'>At vero eosblanditiis praesentium voluptatum deleniti atque corrupti sint occaecati</h5> */}

    //         <div className="grid grid-cols-1 gap-2">
    //             {/* <div><img className='w-full rounded-md' src={categoryImg} alt="category" /></div>
    //             <div><img className='w-full rounded-md' src={categoryImg} alt="category" /></div> */}
                
    //             <div class="h-80 w-full overflow-hidden rounded-lg
    //              bg-white group-hover:opacity-75 sm:aspect-w-2
    //               sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"><img src={categoryImg} alt="iam" class="h-full w-full object-cover object-center"/></div>
                  

    //               <div class="h-80 w-full overflow-hidden rounded-lg
    //              bg-white group-hover:opacity-75 sm:aspect-w-2
    //               sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"><img src={categoryImg} alt="iam" class="h-full w-full object-cover object-center"/></div>
                  

    //               <div class="h-80 w-full overflow-hidden rounded-lg
    //              bg-white group-hover:opacity-75 sm:aspect-w-2
    //               sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"><img src={categoryImg} alt="iam" class="h-full w-full object-cover object-center"/></div>
                  
    //               </div>
    //     </section>
    // </div>
  )
}

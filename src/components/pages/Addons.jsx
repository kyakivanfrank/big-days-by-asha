import React, {useState,useRef, useLayoutEffect} from 'react'
import more from '../../assets/more_arrow.svg'
import categoryImg from '../../assets/panaroma.jpg'


const AddOns = [
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
  },{
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
  },{
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
  },{
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
  },{
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

let shuffledAddons = AddOns
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

export const Addons = () => {

  const addOnsRef =  useRef()

const [AddOnData, setAddOnData] = useState(shuffledAddons)
const [showless, setshowless] = useState(shuffledAddons)

useLayoutEffect(() => {
  const dimension = addOnsRef.current.getBoundingClientRect().width
  setshowless(dimension >= 976 ? AddOnData.slice(0,4) : AddOnData.slice(0,6))
}, [AddOnData])



  return (

<div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-12">
          <div>
          <h2 className="text-2xl font-bold inline text-gray-900">Add ons</h2> 
            <button onClick={()=> setshowless(shuffledAddons)} className='float-right decoration-stone-600 items-baseline' >view all</button>
            </div>

          <div ref={addOnsRef} className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4  lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {showless.map((product, index) => (
                          
// split

<div key={index} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-overflow w-32 lg:w-full text-gray-700">
                    <a href={product.href} >
                      {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                      {product.itemName}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.description}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">AED {product.price}</p>
              </div>
            </div>


// split

              
              // <div key={index} className="group relative">
              //   <div className="relative h-50 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              //     <img
              //       src={addon.imageSrc}
              //       alt={addon.imageAlt}
              //       className="h-full w-full  object-cover object-center"
              //     />
              //   </div>
              //   <h3 className="mt-2 text-sm text-gray-500">
              //     <a href={addon.href}>
              //       <span className="absolute inset-0" />
              //       {addon.itemName}
              //     </a>
              //   </h3>
              //   <p className="text-base font-semibold text-gray-900">AED {addon.price}</p>
              // </div>





            ))}
          </div>

          
        </div>
      </div>
    </div>

  )
}

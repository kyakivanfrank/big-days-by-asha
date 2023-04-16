import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { OurContext } from "../Root"


const callouts = [
    {
        name: 'Love and birthday mood',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
      },
    {
      name: 'Self-Improvement',
      description: 'Happy birthday Best friend',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
  ]
  
  export default function Category() {
    const categoryparams = useParams().category
    const data = useContext(OurContext)
    const category = data.filter( category => { return category.name.includes(categoryparams) })
    const { name, description , href, breadcrumbs} = category[0]


    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 lg:max-w-none lg:py-8">

          <h2 className="text-2xl  text-gray-900">{name}</h2>
            <h4 className="text-md pb-4 sm:pb-8 text-gray-600 ">{description}</h4>
  

          <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2  lg:max-w-7xl">
           <li >
                <div className="flex items-center">
                  <Link to={`#`} className="mr-2 text-sm font-medium text-gray-900">
                    Categories
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

            <li className="text-sm"><a href={href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{name}</a></li>
          </ol>
        </nav>


          
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group  relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover  object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
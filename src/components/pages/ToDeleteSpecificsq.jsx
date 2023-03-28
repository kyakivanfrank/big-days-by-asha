import React from 'react' 
import categoryImg from '../../assets/panaroma.jpg'

const SpecificItem = [
  {
    specificTheme: 'Paris themed Lovers Birthday',
    price: 456,
    description: 'Work from home accessories',
    imageSrc : categoryImg,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    specificTheme: 'kids loves mom',
    price: 456,
    description: 'Journals and note-taking',
    imageSrc : categoryImg,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    specificTheme: 'friend is suprising other',
    price: 456,
    description: 'Journals and note-taking',
    imageSrc : categoryImg,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  }, {
    specificTheme: 'fathers birthday is the best',
    price: 456,
    description: 'Journals and note-taking',
    imageSrc : categoryImg,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  }
]


function Specifics() {
  return (
    <div>
      {SpecificItem.map((item, index) => <div key={index} className="p-2">
      <div className="relative h-64
       w-full overflow-hidden rounded-lg
       bg-white group-hover:opacity-75">
                  <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover object-center" />
                </div>
      <h2 className="text-2xl font-bold py-2 text-gray-900">{item.specificTheme}</h2>

      </div> )}
    </div>
  )
}

export default Specifics
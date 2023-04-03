
// icons
import birthday from './assets/categories/birthday.svg'
import surprise from './assets/categories/surprise.svg'
import babyshower from './assets/categories/babyshower.svg'
import anniversary from './assets/categories/anniversary.svg'
import Personalized from './assets/categories/personalized.svg'
import hamper from './assets/categories/hamper.svg'

//product images
import categoryImg from './assets/panaroma.jpg'
import categoryImg1 from './assets/panaroma1.jpg'
import categoryImg12 from './assets/panaroma12.png'

 const products = [
    {
      name: 'Birthday',
      price: '500 AED',
      icon: birthday,
      href: '#',
      css: '',
      breadcrumbs: [
        {  name: 'Decorations', href: '#' }
      ],
      images: [
        {
          src: categoryImg12,
          alt: 'Model wearing plain white basic tee.',
          css: 'col-span-2'
        },
          {
          src: categoryImg,
          alt: 'Model wearing plain white basic tee.',
          css: 'row-span-2 hidden'
        },
        {
        src: categoryImg1,
        alt: 'Model wearing plain white basic tee.',
        css: 'hidden'
          },
          {
      src: categoryImg,
      alt: 'Model wearing plain white basic tee.',
      css: 'hidden'
        }
      ],
      colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      attendants: [
        { name: '5', choice: true },
        { name: '10', choice: true },
        { name: '20+', choice: true }
      ],
      description:
        'In this package, It requires a simple decoration with a small number of people maximum 10, which comes with 50 ballons (ordinary ballons) with a custom name in an indoor venue, with a simple back and 2 flowers. this setup is suitable for aeonmical baby shower',
      highlights: [
        'Upto 50 ordinary balloons',
        'Customa baby name',
        'circular layout with simple backdrop',
        '2 rose flowers',
      ],
      details:
        'this is the users description, The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
      },
    {
        name: 'Baby Shower',
        price: '500 AED',
        icon: babyshower,
        href: '#',
        css: '',
        breadcrumbs: [
          {  name: 'Decorations', href: '#' }
        ],
        images: [
          {
            src: categoryImg12,
            alt: 'Model wearing plain white basic tee.',
            css: 'col-span-2'
          },
            {
            src: categoryImg,
            alt: 'Model wearing plain white basic tee.',
            css: 'row-span-2 hidden'
          },
          {
          src: categoryImg1,
          alt: 'Model wearing plain white basic tee.',
          css: 'hidden'
            },
            {
        src: categoryImg,
        alt: 'Model wearing plain white basic tee.',
        css: 'hidden'
          }
        ],
        colors: [
          { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        attendants: [
          { name: '5', choice: true },
          { name: '10', choice: true },
          { name: '20+', choice: true }
        ],
        description:
          'In this package, It requires a simple decoration with a small number of people maximum 10, which comes with 50 ballons (ordinary ballons) with a custom name in an indoor venue, with a simple back and 2 flowers. this setup is suitable for aeonmical baby shower',
        highlights: [
          'Upto 50 ordinary balloons',
          'Customa baby name',
          'circular layout with simple backdrop',
          '2 rose flowers',
        ],
        details:
          'this is the users description, The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
      },
    {
        name: 'Anniversary',
        price: '500 AED',
        icon: anniversary,
        href: '#',
        css: '',
        breadcrumbs: [
          {  name: 'Decorations', href: '#' }
        ],
        images: [
          {
            src: categoryImg12,
            alt: 'Model wearing plain white basic tee.',
            css: 'col-span-2'
          },
            {
            src: categoryImg,
            alt: 'Model wearing plain white basic tee.',
            css: 'row-span-2 hidden'
          },
          {
          src: categoryImg1,
          alt: 'Model wearing plain white basic tee.',
          css: 'hidden'
            },
            {
        src: categoryImg,
        alt: 'Model wearing plain white basic tee.',
        css: 'hidden'
          }
        ],
        colors: [
          { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        attendants: [
          { name: '5', choice: true },
          { name: '10', choice: true },
          { name: '20+', choice: true }
        ],
        description:
          'In this package, It requires a simple decoration with a small number of people maximum 10, which comes with 50 ballons (ordinary ballons) with a custom name in an indoor venue, with a simple back and 2 flowers. this setup is suitable for aeonmical baby shower',
        highlights: [
          'Upto 50 ordinary balloons',
          'Customa baby name',
          'circular layout with simple backdrop',
          '2 rose flowers',
        ],
        details:
          'this is the users description, The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
      },
      {
        name: 'Surprise',
        price: '500 AED',
        icon: surprise,
        href: '#',
        css: '',
        breadcrumbs: [
          {  name: 'Decorations', href: '#' }
        ],
        images: [
          {
            src: categoryImg12,
            alt: 'Model wearing plain white basic tee.',
            css: 'col-span-2'
          },
            {
            src: categoryImg,
            alt: 'Model wearing plain white basic tee.',
            css: 'row-span-2 hidden'
          },
          {
          src: categoryImg1,
          alt: 'Model wearing plain white basic tee.',
          css: 'hidden'
            },
            {
        src: categoryImg,
        alt: 'Model wearing plain white basic tee.',
        css: 'hidden'
          }
        ],
        colors: [
          { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        attendants: [
          { name: '5', choice: true },
          { name: '10', choice: true },
          { name: '20+', choice: true }
        ],
        description:
          'In this package, It requires a simple decoration with a small number of people maximum 10, which comes with 50 ballons (ordinary ballons) with a custom name in an indoor venue, with a simple back and 2 flowers. this setup is suitable for aeonmical baby shower',
        highlights: [
          'Upto 50 ordinary balloons',
          'Customa baby name',
          'circular layout with simple backdrop',
          '2 rose flowers',
        ],
        details:
          'this is the users description, The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        },
      {
          name: 'Hamper',
          price: '500 AED',
          icon: hamper,
          href: '#',
          css: '',
          breadcrumbs: [
            {  name: 'Decorations', href: '#' }
          ],
          images: [
            {
              src: categoryImg12,
              alt: 'Model wearing plain white basic tee.',
              css: 'col-span-2'
            },
              {
              src: categoryImg,
              alt: 'Model wearing plain white basic tee.',
              css: 'row-span-2 hidden'
            },
            {
            src: categoryImg1,
            alt: 'Model wearing plain white basic tee.',
            css: 'hidden'
              },
              {
          src: categoryImg,
          alt: 'Model wearing plain white basic tee.',
          css: 'hidden'
            }
          ],
          colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
          ],
          attendants: [
            { name: '5', choice: true },
            { name: '10', choice: true },
            { name: '20+', choice: true }
          ],
          description:
            'In this package, It requires a simple decoration with a small number of people maximum 10, which comes with 50 ballons (ordinary ballons) with a custom name in an indoor venue, with a simple back and 2 flowers. this setup is suitable for aeonmical baby shower',
          highlights: [
            'Upto 50 ordinary balloons',
            'Customa baby name',
            'circular layout with simple backdrop',
            '2 rose flowers',
          ],
          details:
            'this is the users description, The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        },
      {
          name: 'customize',
          price: '500 AED',
          icon: Personalized,
          href: '#',
          css: '',
          breadcrumbs: [
            {  name: 'Decorations', href: '#' }
          ],
          images: [
            {
              src: categoryImg12,
              alt: 'Model wearing plain white basic tee.',
              css: 'col-span-2'
            },
              {
              src: categoryImg,
              alt: 'Model wearing plain white basic tee.',
              css: 'row-span-2 hidden'
            },
            {
            src: categoryImg1,
            alt: 'Model wearing plain white basic tee.',
            css: 'hidden'
              },
              {
          src: categoryImg,
          alt: 'Model wearing plain white basic tee.',
          css: 'hidden'
            }
          ],
          colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
          ],
          attendants: [
            { name: '5', choice: true },
            { name: '10', choice: true },
            { name: '20+', choice: true }
          ],
          description:
            'In this package, It requires a simple decoration with a small number of people maximum 10, which comes with 50 ballons (ordinary ballons) with a custom name in an indoor venue, with a simple back and 2 flowers. this setup is suitable for aeonmical baby shower',
          highlights: [
            'Upto 50 ordinary balloons',
            'Customa baby name',
            'circular layout with simple backdrop',
            '2 rose flowers',
          ],
          details:
            'this is the users description, The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        },
  ]

  export default products;
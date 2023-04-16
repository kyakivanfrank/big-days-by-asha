import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'

import App from './App'
import Product from './components/pages/Product'
import { Categories } from './components/pages/Categories'
import { Holidays } from './components/pages/Holidays'
import Error from './components/Error'
import Ourcompany from "./components/pages/Ourcompany"

import products from "./Products"
import { Addons } from './components/pages/Addons'
import ShoppingCart from './components/pages/ShoppingCart'
import SignIn from './components/pages/signIn'
import SignUp from './components/pages/signUp'
import Category from './components/Category'
import Reviews from './components/Reviews'
import Addon from './components/pages/Addon'
export const OurContext = createContext()

const Root = () => {
    const [productList, setProducts] = useState(products)
    return <OurContext.Provider value={productList}><RouterProvider router={router} /></OurContext.Provider>
}

// so far weve realized 2 collections of data

// Data hierarchy for categories => categories => birthdays => boss"s birthday packages => edit more => checkout => make payments =>receive services on a scheduled data => give areview

// Data hierarchy for Addons => Addon Pool, filter by amount, filter by prices => choose Addon => Add along checkout => purchase > and wait to recieve in location

const dataLoader = ()=> {
  return ['boy', 'girl', 'brother', 'sister']
}

const router =  createBrowserRouter([
  {
    path : "/",
    element: <App/>,

    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <><Holidays/><Categories/><Addons/> </>
      },
      {
        path: '/:category',
        element:  <><Category/> {/* <Reviews/>  */} <Addons/></>,
      },
      {
        path: '/about',
        element: <Ourcompany/>
      }, {
        path: '/addon',
        element: <Addon/>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },{
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/shop',
        element: <ShoppingCart/>
      },
      {
        path: '/product',
        element: <Product />,
        children:[
          {
            path: '/product/cart',
            element: <ShoppingCart/>
          }
        ]
      }
    ]
  }
])

export default Root


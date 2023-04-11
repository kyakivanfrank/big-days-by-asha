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
export const OurContext = createContext()

const Root = () => {
    const [productList, setProducts] = useState(products)
    return <OurContext.Provider value={productList}><RouterProvider router={router} /></OurContext.Provider>
}


// if you open the { index page }, you have a choice to login or not.
// but when you choose, a products edit it and try making a { checkout },
//  the login prompt will ask you to { sign in }, if you don't have an account then
// you have to { sign up } and the proceed with your { purchase } 



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
        path: '/company',
        element: <Ourcompany/>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/:product',
        element: <Product />,
        children:[
          {
            path: '/:product/cart',
            element: <ShoppingCart/>
          }
        ]
      }
    ]
  }
])

export default Root


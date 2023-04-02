import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'

import App from './App'
import Product from './components/pages/Product'
import { Categories } from './components/pages/Categories'
import { Holidays } from './components/pages/Holidays'
import Error from './components/Error'

import products from "./Products"
export const OurContext = createContext()

const Root = () => {
    const [productList, setProducts] = useState(products)
    return <OurContext.Provider value={productList}><RouterProvider router={router} /></OurContext.Provider>
}

const router =  createBrowserRouter([
  {
    path : "/",
    element: <App/>,

    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <><Holidays/><Categories/></>
      },
      {
        path: '/:product',
        element: <Product/>
      }
    ]
  }
])

export default Root


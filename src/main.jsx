import React from 'react'
import ReactDOM from 'react-dom/client'
// import App, {loader as rootLoader }from './App'
import App from "./App"
import Error from './components/Error'
import Product from './components/pages/Product'
import { Categories } from './components/pages/Categories'
import { Holidays } from './components/pages/Holidays'

import './index.css'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'

const router =  createBrowserRouter([
  {
    path : "/",
    element: <App/>,

    errorElement: <Error/>,
    // loader: rootLoader,
    children:[
      {
        path: '/',
        element: <><Holidays/><Categories/></>
      },{
        path: '/products',
        element: <Product/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

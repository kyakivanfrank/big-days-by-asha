
import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'
import { Holidays } from './components/pages/Holidays'
import { Categories } from './components/pages/Categories'

// app context give all components access to our Data
export const OurContext = createContext()
import products from './Products.js'


const App= ()=> {
const [productList, setProducts] = useState(products)

  return  <OurContext.Provider value={productList}>
    <div className='box-border relative'>
    <Header/>
    <Outlet/>
    <footer>this is the fooer</footer>
    </div>
    </OurContext.Provider>
}

export default App

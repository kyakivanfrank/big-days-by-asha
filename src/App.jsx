import './App.css'
import Header from './components/header/Header'
import { Holidays } from './components/pages/Holidays'
import { Categories } from './components/pages/Categories'
import { Products } from './components/pages/Products'
import Specifics from './components/pages/Specifics'

function App() {
  return (
    <div className='box-border relative'>
    <Header/>
    <Categories/> 
    {/* <Holidays/> */}
    {/* <Specifics/> */}
     {/* <Products/> */}

   
    </div>
  )
}

export default App

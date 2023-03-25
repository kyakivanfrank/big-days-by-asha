import './App.css'
import Header from './components/header/Header'
import { Holidays } from './components/pages/Holidays'
import { Categories } from './components/pages/Categories'
import { Products } from './components/pages/Products'
// import { Involvement } from './components/pages/Involvement'
// import { Specifics } from './components/pages/Specifics'

function App() {
  return (
    <div className='box-border relative'>
    <Header/>
    {/* <Holidays/> */}
    <Categories/>
    <Products/>
    

    {/* <Specifics/>  please add section elements in these*/} 
    {/* <Involvement/> */}
    </div>
  )
}

export default App

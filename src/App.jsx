import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'
import Footer from "./components/Footer/Footer"
const App= ()=> <div className='box-border relative'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>


export default App

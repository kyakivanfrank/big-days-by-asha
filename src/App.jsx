import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'
const App= ()=> <div className='box-border relative'>
    <Header/>
    <Outlet/>
    <footer>this is the fooer</footer>
    </div>


export default App

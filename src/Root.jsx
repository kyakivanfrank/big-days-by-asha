import { createContext, useEffect, useState } from 'react'
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

import app from './firebase'
import { getFirestore} from "firebase/firestore";
import { collection, doc, getDocs } from "firebase/firestore"; 



const Root = () => {
//   const db  = getFirestore(app)
//   const [categories, setCategories] = useState([])
//   const [addons, setAddons] = useState([])
//   const [data, setData] = useState([])

//   const fetchAddons = async () => {
//     const collectionRef = collection(db, 'Addons');
//     const querySnapshot = await getDocs(collectionRef);
//     const AddonDocs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setAddons(AddonDocs);
//     setData({...data, AddonDocs})
//   };

//   const fetchCategories = async () => {
//     const collectionRef = collection(db, 'Categories');
//     const querySnapshot = await getDocs(collectionRef);
//     const CategoryDocs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setCategories(CategoryDocs);
//     setData({...data, categories})
//   };

//   useEffect(() => {
//     fetchCategories();
// }, []);


const db = getFirestore(app);
const [categories, setCategories] = useState([]);
const [addons, setAddons] = useState([]);

const fetchAddons = async () => {
  const collectionRef = collection(db, 'Addons');
  const querySnapshot = await getDocs(collectionRef);
  const AddonDocs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  setAddons(AddonDocs);
};

const fetchCategories = async () => {
  const collectionRef = collection(db, 'Categories');
  const querySnapshot = await getDocs(collectionRef);
  const CategoryDocs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  setCategories(CategoryDocs);
};

useEffect(() => {
  Promise.all([fetchCategories(), fetchAddons()]);
}, []);




    return <OurContext.Provider value={categories}><RouterProvider router={router} /></OurContext.Provider>
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
        element:  <><Category/><Addons/></>
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
      // {
      //   path: '/shop',
      //   element: <ShoppingCart/>
      // },
      {
        path: '/product',
        element: <Product />,
        // children:[
        //   {
        //     path: '/product/cart',
        //     element: <ShoppingCart/>
        //   }
        // ]
      }
    ]
  }
])

export default Root


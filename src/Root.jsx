import { createContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Routes  } from 'react-router-dom'

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

const db = getFirestore(app);


const [loading, setLoading] = useState(true);
const [data, setData] = useState({ categories: [], addons: [], promotionalOffers:[]  });

const fetchCollectionData = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docs;
};

useEffect(() => {
  Promise.all([
    fetchCollectionData('Categories'),
    fetchCollectionData('Addons'),
    fetchCollectionData('PromotionalOffers')
  ])
    .then(([categories, addons, promotionalOffers]) => {
      setData({ categories, addons, promotionalOffers });
      setLoading(false);
    })
    .catch((error) => {
      console.log('Error fetching data: ', error);
    });
}, []);

console.log(data)

if (loading) {
  return <div>Loading...</div>;
}

    return <OurContext.Provider value={data}><RouterProvider router={router} /></OurContext.Provider>
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App/>} errorElement={<Error />}>
      <Route path="/" element={<><Holidays/><Categories/><Addons/> </>} />
      <Route path='/:category' element={<><Category  /><Addons/></>}/>
      <Route path="about" element={<Ourcompany />} />
      <Route path='signin' element={<SignIn/>}/>
      <Route path='checkout' element={<ShoppingCart/>}/>
      <Route path='signup' element={<SignUp/>}/>
    </Route>
  )
);


export default Root


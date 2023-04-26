import { createContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Routes } from 'react-router-dom'

import App from './App'
import ProductPage from './components/pages/ProductPage'
import Dashboard from './dashboard/index.jsx'
import { Categories } from './components/pages/Categories'
import PromotionalSlides from './components/pages/PromotionalSlides'
import Error from './components/Error'
import Ourcompany from "./components/pages/Ourcompany"

// here are the admin routes

// import Products from "./dashboard/components/Products";
// import Dashboardcategories from "./dashboard/components/Dashboardcategories";
// import Promotions from "./dashboard/components/Promotions";
// import Subscribers from "./dashboard/components/Subscribers";
// import LoginLogs from "./dashboard/components/Loginlogs";
// import Orders from "./dashboard/components/Orders";




import { Addons } from './components/pages/Addons'
import ShoppingCart from './components/pages/ShoppingCart'
import SignIn from './components/pages/signIn'
import SignUp from './components/pages/signUp'
import Category from './components/Category'
import Reviews from './components/Reviews'
import Addon from './components/pages/Addon'
export const OurContext = createContext()

import app from './firebase'
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";



const Root = () => {


  const db = getFirestore(app);

  // const offersCollectionRef = collection(db, 'PromotionalOffers');

  // const offersData = [
  //   {
  //     id: 'ChristmasOffer',
  //     offerTitle: 'Christmas Offer',
  //     description: 'Get 30% off on all Christmas-themed products!',
  //     price: 50.0,
  //     discountPrice: 35.0,
  //     keywords: ['Christmas', 'Holiday', 'Sale'],
  //     backgroundImage: 'https://example.com/christmas-background.jpg',
  //     simpleImage: 'https://example.com/christmas-simple.jpg'
  //   },
  //   {
  //     id: 'Valentines',
  //     offerTitle: 'Valentine\'s Day Offer',
  //     description: 'Surprise your loved one with a gift and get 30% off!',
  //     price: 75.0,
  //     discountPrice: 52.5,
  //     keywords: ['Valentine\'s Day', 'Love', 'Sale'],
  //     backgroundImage: 'https://example.com/valentines-background.jpg',
  //     simpleImage: 'https://example.com/valentines-simple.jpg'
  //   },
  //   {
  //     id: 'happyBirthday',
  //     offerTitle: 'Happy Birthday Offer',
  //     description: 'Celebrate your birthday in style and get 30% off!',
  //     price: 100.0,
  //     discountPrice: 70.0,
  //     keywords: ['Birthday', 'Party', 'Sale'],
  //     backgroundImage: 'https://example.com/birthday-background.jpg',
  //     simpleImage: 'https://example.com/birthday-simple.jpg'
  //   }
  // ];

  // offersData.forEach(async (offer) => {
  //   await setDoc(doc(offersCollectionRef, offer.id), offer);
  // });

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ categories: [], addons: [], promotionalOffers: [] });

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


  if (loading) {
    return <div>Loading...</div>;
  }

  return <OurContext.Provider value={data}><RouterProvider router={router} /></OurContext.Provider>
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<Error />}>
      <Route path="/" element={<><PromotionalSlides /><Categories /><Addons /> </>} />
      <Route path=':category' element={<><Category /><Addons /></>} >
        <Route path=':product' element={<ProductPage />} />
      </Route>
      <Route path="about" element={<Ourcompany />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='checkout' element={<ShoppingCart />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='product' element={<ProductPage />} />
      {/* <Route path='admin' element={<Dashboard />} >
        <Route path="/products" element={<Products products={products} removeProduct={removeProduct} />} />
        <Route path="/categories" element={<Dashboardcategories categories={categories} addCategory={addCategory} />} />
        <Route path="/promotions" element={<Promotions promotions={promotions} addPromotion={addPromotion} removePromotion={removePromotion} />} />
        <Route path="/subscribers" element={<Subscribers subscribers={subscribers} addSubscriber={addSubscriber} />} />
        <Route path="/login-logs" element={<LoginLogs loginLogs={loginLogs} addLoginLog={addLoginLog} />} />
        <Route path="/orders" element={<Orders orders={orders} addOrder={addOrder} />} />
      </Route> */}
    </Route>
  )
);


export default Root





import { createContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

import App from './App'
import ProductPage from './components/pages/ProductPage'
import { Categories } from './components/pages/Categories'
import PromotionalSlides from './components/pages/PromotionalSlides'
import Error from './components/Error'
import Ourcompany from "./components/pages/Ourcompany"

import { Addons } from './components/pages/Addons'
import SignIn from './components/pages/signIn'
import SignUp from './components/pages/signUp'
import Category from './components/Category'
export const OurContext = createContext()

import app from './firebase'
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";
import Checkout from './components/pages/Checkout'



const Root = () => {


  const db = getFirestore(app);


  // const categories = [
  //   {
  //     id: "Anniversaries",
  //     name: "Anniversaries",
  //     icon: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/Categories%2Fanniversary.svg?alt=media&token=7c103cf3-8720-4c49-83ed-0567f0a5aef8",
  //     description: "Celebrate your special day with our anniversary gifts.",
  //     decorTypes: [
  //       {
  //         itemName: "Personalized Photo Frame",
  //         description: "Treasure your memories with a personalized photo frame.",
  //         price: 25.99,
  //         giftKeywords: ["anniversary", "photo frame", "personalized"],
  //         highlights: ["unique", "sentimental", "customizable"],
  //         details: "Fits 4x6 inch photo, available in 3 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Date Night Jar",
  //         description: "Bring some excitement to your date nights with our date night jar.",
  //         price: 19.99,
  //         giftKeywords: ["anniversary", "date night", "excitement"],
  //         highlights: ["fun", "romantic", "customizable"],
  //         details: "Comes with 50 date ideas, available in 2 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],

  //       },
  //       {
  //         itemName: "Personalized Champagne Glasses",
  //         description: "Toast to your love with our personalized champagne glasses.",
  //         price: 29.99,
  //         giftKeywords: ["anniversary", "champagne", "personalized"],
  //         highlights: ["elegant", "romantic", "customizable"],
  //         details: "Engraved with your names and anniversary date, set of 2 glasses.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       }

  //     ],
  //   },
  //   {
  //     id: "Birthdays",
  //     name: "Birthdays",
  //     icon: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/Categories%2Fsurprise.svg?alt=media&token=765cc65e-3d83-446c-8cc3-50d0b4f051ba",
  //     description: "Surprise them with our unique gifts and experiences.",
  //     decorTypes: [
  //       {
  //         itemName: "Personalized Photo Frame",
  //         description: "Treasure your memories with a personalized photo frame.",
  //         price: 25.99,
  //         giftKeywords: ["anniversary", "photo frame", "personalized"],
  //         highlights: ["unique", "sentimental", "customizable"],
  //         details: "Fits 4x6 inch photo, available in 3 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Date Night Jar",
  //         description: "Bring some excitement to your date nights with our date night jar.",
  //         price: 19.99,
  //         giftKeywords: ["anniversary", "date night", "excitement"],
  //         highlights: ["fun", "romantic", "customizable"],
  //         details: "Comes with 50 date ideas, available in 2 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Personalized Champagne Glasses",
  //         description: "Toast to your love with our personalized champagne glasses.",
  //         price: 29.99,
  //         giftKeywords: ["anniversary", "champagne", "personalized"],
  //         highlights: ["elegant", "romantic", "customizable"],
  //         details: "Engraved with your names and anniversary date, set of 2 glasses.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       }
  //     ],
  //   },
  //   {
  //     id: "Baby showers",
  //     name: "Baby showers",
  //     icon: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/Categories%2Fbabyshower.svg?alt=media&token=ee37598f-fae0-4d77-9a38-caffb5c4f934",
  //     description: "Welcome the new arrival with our baby shower gifts.",
  //     decorTypes: [
  //       {
  //         itemName: "Personalized Photo Frame",
  //         description: "Treasure your memories with a personalized photo frame.",
  //         price: 25.99,
  //         giftKeywords: ["anniversary", "photo frame", "personalized"],
  //         highlights: ["unique", "sentimental", "customizable"],
  //         details: "Fits 4x6 inch photo, available in 3 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Date Night Jar",
  //         description: "Bring some excitement to your date nights with our date night jar.",
  //         price: 19.99,
  //         giftKeywords: ["anniversary", "date night", "excitement"],
  //         highlights: ["fun", "romantic", "customizable"],
  //         details: "Comes with 50 date ideas, available in 2 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Personalized Champagne Glasses",
  //         description: "Toast to your love with our personalized champagne glasses.",
  //         price: 29.99,
  //         giftKeywords: ["anniversary", "champagne", "personalized"],
  //         highlights: ["elegant", "romantic", "customizable"],
  //         details: "Engraved with your names and anniversary date, set of 2 glasses.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       }
  //     ],
  //   },
  //   {
  //     id: "Customized",
  //     name: "Customized",
  //     icon: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/Categories%2Fpersonalized.svg?alt=media&token=3155ac06-d4cc-4310-9472-0bc93dc06bac",
  //     description: "Create a personalized gift for your loved ones.",
  //     decorTypes: [
  //       {
  //         itemName: "Personalized Photo Frame",
  //         description: "Treasure your memories with a personalized photo frame.",
  //         price: 25.99,
  //         giftKeywords: ["anniversary", "photo frame", "personalized"],
  //         highlights: ["unique", "sentimental", "customizable"],
  //         details: "Fits 4x6 inch photo, available in 3 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Personalized Champagne Glasses",
  //         description: "Toast to your love with our personalized champagne glasses.",
  //         price: 29.99,
  //         giftKeywords: ["anniversary", "champagne", "personalized"],
  //         highlights: ["elegant", "romantic", "customizable"],
  //         details: "Engraved with your names and anniversary date, set of 2 glasses.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Personalized Photo Frame",
  //         description: "Treasure your memories with a personalized photo frame.",
  //         price: 25.99,
  //         giftKeywords: ["anniversary", "photo frame", "personalized"],
  //         highlights: ["unique", "sentimental", "customizable"],
  //         details: "Fits 4x6 inch photo, available in 3 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       }
  //     ],
  //   },
  //   {
  //     id: "Hampers",
  //     name: "Hampers",
  //     icon: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/Categories%2Fhamper.svg?alt=media&token=c9510349-973f-40b5-9240-96b914355c3d",
  //     description: "Treat them with our carefully curated hampers.",
  //     decorTypes: [
  //       {
  //         itemName: "Personalized Photo Frame",
  //         description: "Treasure your memories with a personalized photo frame.",
  //         price: 25.99,
  //         giftKeywords: ["anniversary", "photo frame", "personalized"],
  //         highlights: ["unique", "sentimental", "customizable"],
  //         details: "Fits 4x6 inch photo, available in 3 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Date Night Jar",
  //         description: "Bring some excitement to your date nights with our date night jar.",
  //         price: 19.99,
  //         giftKeywords: ["anniversary", "date night", "excitement"],
  //         highlights: ["fun", "romantic", "customizable"],
  //         details: "Comes with 50 date ideas, available in 2 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Personalized Champagne Glasses",
  //         description: "Toast to your love with our personalized champagne glasses.",
  //         price: 29.99,
  //         giftKeywords: ["anniversary", "champagne", "personalized"],
  //         highlights: ["elegant", "romantic", "customizable"],
  //         details: "Engraved with your names and anniversary date, set of 2 glasses.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       }
  //     ],
  //   },
  //   {
  //     id: "Surprises",
  //     name: "Surprises",
  //     icon: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/Categories%2Fsurprise.svg?alt=media&token=765cc65e-3d83-446c-8cc3-50d0b4f051ba",
  //     description: "Surprise them with our unique gifts and experiences.",
  //     decorTypes: [
  //       {
  //         itemName: "Personalized Photo Frame",
  //         description: "Treasure your memories with a personalized photo frame.",
  //         price: 25.99,
  //         giftKeywords: ["anniversary", "photo frame", "personalized"],
  //         highlights: ["unique", "sentimental", "customizable"],
  //         details: "Fits 4x6 inch photo, available in 3 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Date Night Jar",
  //         description: "Bring some excitement to your date nights with our date night jar.",
  //         price: 19.99,
  //         giftKeywords: ["anniversary", "date night", "excitement"],
  //         highlights: ["fun", "romantic", "customizable"],
  //         details: "Comes with 50 date ideas, available in 2 colors.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       },
  //       {
  //         itemName: "Personalized Champagne Glasses",
  //         description: "Toast to your love with our personalized champagne glasses.",
  //         price: 29.99,
  //         giftKeywords: ["anniversary", "champagne", "personalized"],
  //         highlights: ["elegant", "romantic", "customizable"],
  //         details: "Engraved with your names and anniversary date, set of 2 glasses.",
  //         colors: [
  //           { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //           { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //           { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  //         ],
  //         attendants: [
  //           { name: '5', choice: true },
  //           { name: '10', choice: true },
  //           { name: '20+', choice: true }
  //         ],
  //         imageSet: [
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma12.png?alt=media&token=f798c901-0977-4d31-879d-0af1dfb1e48d",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'col-span-2'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fwedding.jpg?alt=media&token=7f338d62-28d6-4dc0-befb-0a32fc80e4e8",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'row-span-2 hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma.jpg?alt=media&token=349573e7-4ea0-4edb-b73c-9b5b53006b02",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           },
  //           {
  //             src: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/productsImages%2Fpanaroma1.jpg?alt=media&token=55e90295-b53d-4c7d-8e2d-e4f85e36e7a7",
  //             alt: 'Model wearing plain white basic tee.',
  //             css: 'hidden'
  //           }
  //         ],
  //       }
  //     ],
  //   },
  // ];

  // categories.forEach((category) => {
  //   const categoryRef = collection(db, "Categories");
  //   const categoryDocRef = doc(categoryRef, category.id);
  //   setDoc(categoryDocRef, category)
  //     .then(() => console.log(`Added ${category.id} category to Firestore`))
  //     .catch((error) => console.error(error));
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


// first buid the searchbutton and the floating pop up box, then the shopping bag, the process to add the data 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<Error />}>
      <Route exact path="/" element={<><PromotionalSlides /><Categories /><Addons /> </>} />
      <Route path=':categoryId' element={<><Category /><Addons /></>} />
      <Route path='/:categoryId/:productId' element={<ProductPage />} />
      <Route exact path="about" element={<Ourcompany />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='checkout' element={<Checkout />} />
    </Route>
  )
);


export default Root


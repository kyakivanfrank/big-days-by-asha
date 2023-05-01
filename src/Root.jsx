// Define categories data
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
//           { name: "Black", class: "bg-black", selectedClass: "ring-gray-400" },
//           { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//           { name: "Walnut", class: "bg-walnut", selectedClass: "ring-gray-900" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "personalized-photo-frame-black.jpg",
//             alt: "Personalized photo frame in black",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-white.jpg",
//             alt: "Personalized photo frame in white",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-walnut.jpg",
//             alt: "Personalized photo frame in walnut",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-walnut.jpg",
//             alt: "Personalized photo frame in walnut",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Red", class: "bg-red-500", selectedClass: "ring-gray-400" },
//           { name: "Pink", class: "bg-pink-500", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "date-night-jar-red.jpg",
//             alt: "Date night jar in red",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "date-night-jar-pink.jpg",
//             alt: "Date night jar in pink",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Clear", class: "bg-white", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           {
//             name: "20+", choice: false
//           },
//         ],
//         imageSet: [
//           {
//             src: "personalized-champagne-glasses.jpg",
//             alt: "Personalized champagne glasses",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//         ],
//       }

//     ],
//   },
//   {
//     id: "Birthdays",
//     name: "Birthdays",
//     icon: "https://firebasestorage.googleapis.com/v0/b/big-days-by-asha-99224.appspot.com/o/Categories%2Fbirthday.svg?alt=media&token=d374cae2-9d75-40b4-badc-1c8d9ec1b736",
//     description: "Make their birthday unforgettable with our gifts.",
//     decorTypes: [

//       {
//         itemName: "Engraved Cheese Board",
//         description: "Add a touch of elegance to your cheese platter with our engraved cheese board.",
//         price: 39.99,
//         giftKeywords: ["anniversary", "cheese", "elegant"],
//         highlights: ["personalized", "functional", "customizable"],
//         details: "Engraved with your names and anniversary date, comes with 3 cheese knives.",
//         colors: [
//           { name: "Bamboo", class: "bg-bamboo", selectedClass: "ring-gray-900" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "engraved-cheese-board.jpg",
//             alt: "Engraved cheese board",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//         ],
//       },
//       {
//         itemName: "His and Hers Bathrobes",
//         description: "Relax in style with our his and hers bathrobes.",
//         price: 49.99,
//         giftKeywords: ["anniversary", "bathrobe", "couples"],
//         highlights: ["luxurious", "cozy", "matching"],
//         details: "Made with soft and comfortable material, available in 3 colors.",
//         colors: [
//           { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//           { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//           { name: "Navy", class: "bg-navy", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "his-and-hers-bathrobes-white.jpg",
//             alt: "His and hers bathrobes in white",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "his-and-hers-bathrobes-gray.jpg",
//             alt: "His and hers bathrobes in gray",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "his-and-hers-bathrobes-navy.jpg",
//             alt: "His and hers bathrobes in navy",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//         ],
//       },
//       {
//         itemName: "Love Letter Blanket",
//         description: "Wrap yourself in your love story with our love letter blanket.",
//         price: 59.99,
//         giftKeywords: ["anniversary", "blanket", "love story"],
//         highlights: ["sentimental", "cozy", "customizable"],
//         details: "Personalized with your love story, available in 3 sizes and 2 colors.",
//         colors: [
//           { name: "Pink", class: "bg-pink-500", selectedClass: "ring-gray-400" },
//           { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//           { name: "Navy Blue", class: "bg-blue-700", selectedClass: "ring-gray-900" }
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: true },
//           { name: "20+", choice: false }
//         ],
//         imageSet: [
//           { src: "love-letter-blanket-1.jpg", alt: "Love Letter Blanket - Pink", css: "w-full h-auto" },
//           { src: "love-letter-blanket-2.jpg", alt: "Love Letter Blanket - Gray", css: "w-full h-auto" },
//           { src: "love-letter-blanket-3.jpg", alt: "Love Letter Blanket - Navy Blue", css: "w-full h-auto" },
//           { src: "love-letter-blanket-4.jpg", alt: "Love Letter Blanket - Personalized Example", css: "w-full h-auto" }
//         ]
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
//           { name: "Black", class: "bg-black", selectedClass: "ring-gray-400" },
//           { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//           { name: "Walnut", class: "bg-walnut", selectedClass: "ring-gray-900" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "personalized-photo-frame-black.jpg",
//             alt: "Personalized photo frame in black",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-white.jpg",
//             alt: "Personalized photo frame in white",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-walnut.jpg",
//             alt: "Personalized photo frame in walnut",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Red", class: "bg-red-500", selectedClass: "ring-gray-400" },
//           { name: "Pink", class: "bg-pink-500", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "date-night-jar-red.jpg",
//             alt: "Date night jar in red",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "date-night-jar-pink.jpg",
//             alt: "Date night jar in pink",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Clear", class: "bg-white", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           {
//             name: "20+", choice: false
//           },
//         ],
//         imageSet: [
//           {
//             src: "personalized-champagne-glasses.jpg",
//             alt: "Personalized champagne glasses",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Black", class: "bg-black", selectedClass: "ring-gray-400" },
//           { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//           { name: "Walnut", class: "bg-walnut", selectedClass: "ring-gray-900" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "personalized-photo-frame-black.jpg",
//             alt: "Personalized photo frame in black",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-white.jpg",
//             alt: "Personalized photo frame in white",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-walnut.jpg",
//             alt: "Personalized photo frame in walnut",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Red", class: "bg-red-500", selectedClass: "ring-gray-400" },
//           { name: "Pink", class: "bg-pink-500", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "date-night-jar-red.jpg",
//             alt: "Date night jar in red",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "date-night-jar-pink.jpg",
//             alt: "Date night jar in pink",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Clear", class: "bg-white", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           {
//             name: "20+", choice: false
//           },
//         ],
//         imageSet: [
//           {
//             src: "personalized-champagne-glasses.jpg",
//             alt: "Personalized champagne glasses",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Black", class: "bg-black", selectedClass: "ring-gray-400" },
//           { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//           { name: "Walnut", class: "bg-walnut", selectedClass: "ring-gray-900" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "personalized-photo-frame-black.jpg",
//             alt: "Personalized photo frame in black",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-white.jpg",
//             alt: "Personalized photo frame in white",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-walnut.jpg",
//             alt: "Personalized photo frame in walnut",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Red", class: "bg-red-500", selectedClass: "ring-gray-400" },
//           { name: "Pink", class: "bg-pink-500", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "date-night-jar-red.jpg",
//             alt: "Date night jar in red",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "date-night-jar-pink.jpg",
//             alt: "Date night jar in pink",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Clear", class: "bg-white", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           {
//             name: "20+", choice: false
//           },
//         ],
//         imageSet: [
//           {
//             src: "personalized-champagne-glasses.jpg",
//             alt: "Personalized champagne glasses",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Black", class: "bg-black", selectedClass: "ring-gray-400" },
//           { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//           { name: "Walnut", class: "bg-walnut", selectedClass: "ring-gray-900" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "personalized-photo-frame-black.jpg",
//             alt: "Personalized photo frame in black",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-white.jpg",
//             alt: "Personalized photo frame in white",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "personalized-photo-frame-walnut.jpg",
//             alt: "Personalized photo frame in walnut",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Red", class: "bg-red-500", selectedClass: "ring-gray-400" },
//           { name: "Pink", class: "bg-pink-500", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           { name: "20+", choice: false },
//         ],
//         imageSet: [
//           {
//             src: "date-night-jar-red.jpg",
//             alt: "Date night jar in red",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
//           {
//             src: "date-night-jar-pink.jpg",
//             alt: "Date night jar in pink",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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
//           { name: "Clear", class: "bg-white", selectedClass: "ring-gray-400" },
//         ],
//         attendants: [
//           { name: "5", choice: true },
//           { name: "10", choice: false },
//           {
//             name: "20+", choice: false
//           },
//         ],
//         imageSet: [
//           {
//             src: "personalized-champagne-glasses.jpg",
//             alt: "Personalized champagne glasses",
//             css: "w-40 h-40 object-cover rounded-md",
//           },
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

// fixing where the shopping cart goes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<Error />}>
      <Route exact path="/" element={<><PromotionalSlides /><Categories /><Addons /> </>} />
      <Route path=':categoryId' element={<><Category /><Addons /></>} />
      <Route path='/:categoryId/:productId' element={<ProductPage />} />
      <Route exact path="about" element={<Ourcompany />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='checkout' element={<Checkout/>} />
    </Route>
  )
);


export default Root


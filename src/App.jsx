import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'
import Footer from "./components/Footer/Footer"


const App = () => <div className='box-border relative'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>


export default App


// // Assuming you have already initialized Firestore with appropriate configuration
// const db = firebase.firestore();

// // Get a reference to the collection you want to retrieve documents from
// const myCollection = db.collection('my-collection');

// // Call the `get()` method on the reference to retrieve all documents in the collection
// myCollection.get()
//   .then((querySnapshot) => {
//     // Loop through the query snapshot and log the data of each document
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, ' => ', doc.data());
//     });
//   })
//   .catch((error) => {
//     console.log('Error getting documents: ', error);
//   });


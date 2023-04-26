import { useState, useEffect } from 'react';
import pic from "../../assets/panaroma12.png"
import pic2 from "../../assets/panaroma.jpg"

// https://www.sliderrevolution.com/templates/travel-agency-card-slider/

const offersData = [
  {
    id: 1,
    offerTitle: 'Christmas Offer',
    description: 'Get 30% off on all Christmas-themed products!',
    price: 50.0,
    discountPrice: 35.0,
    keywords: ['Christmas', 'Holiday', 'Sale'],
    backgroundImage: pic,
    simpleImage: pic2
  },
  {
    id: 2,
    offerTitle: 'Valentine\'s Day Offer',
    description: 'Surprise your loved one with a gift and get 30% off!',
    price: 75.0,
    discountPrice: 52.5,
    keywords: ['Valentine\'s Day', 'Love', 'Sale'],
    backgroundImage: pic2,
    simpleImage: pic2
  },
  {
    id: 3,
    offerTitle: 'Happy Birthday Offer',
    description: 'Celebrate your birthday in style and get 30% off!',
    price: 100.0,
    discountPrice: 70.0,
    keywords: ['Birthday', 'Party', 'Sale'],
    backgroundImage: pic,
    simpleImage: pic2
  }
];

const PromotionalSlide = () => {
  const [offers, setOffers] = useState([]);
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    // const fetchOffers = async () => {
    //   const response = await fetch('https://example.com/offers');
    //   const data = await response.json();
    //   setOffers(offersData);
    // }
    setOffers(offersData)
    // fetchOffers();
  }, []);

  const handlePrevious = () => {
    setCurrentOffer(currentOffer === 0 ? offers.length - 1 : currentOffer - 1);
  }

  const handleNext = () => {
    setCurrentOffer(currentOffer === offers.length - 1 ? 0 : currentOffer + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentOffer]);


  return (
    <div className="relative w-full h-full">
      <img src="/company-logo.png" className="absolute top-0 left-0 h-12 p-2" alt="Company Logo" />
      <div className="relative w-full h-full">
        {offers.length > 0 && (
          <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">{offers[currentOffer].offerTitle}</h2>
              <p className="text-sm mb-2">{offers[currentOffer].description}</p>
              <div className="inline-block bg-green-500 rounded-full px-2 py-1 mb-2">{offers[currentOffer].discountPrice}% OFF</div>
              <p className="text-lg font-bold mb-4">{offers[currentOffer].price} USD</p>
            </div>
            <img src={offers[currentOffer].backgroundImage} className="w-full h-full object-cover" alt="Background" />
            <button onClick={handlePrevious} className="absolute left-2/12 bottom-1/2 transform -translate-y-1/2 text-white text-3xl font-bold">&#10094;</button>
            <button onClick={handleNext} className="absolute right-2/12 bottom-1/2 transform -translate-y-1/2 text-white text-3xl font-bold">&#10095;</button>
            <img src={offers[currentOffer].sampleImage} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0" alt="Sample" />
          </>
        )}
      </div>
    </div>
  );
}

export default PromotionalSlide;

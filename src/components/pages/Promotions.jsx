import React, { useState, useEffect, useContext } from 'react'
import { OurContext } from '../../Root'

const Promotions = () => {

  const { promotionalOffers } = useContext(OurContext)
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const numbers = [5500, 8000, 2000];
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % promotionalOffers.length);
    }, numbers[Math.floor(Math.random() * numbers.length)]);

    return () => clearInterval(interval);
  }, [promotionalOffers, currentImage]);

  if (!promotionalOffers || promotionalOffers.length === 0) {
    return null;
  }

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5'>


      <div id="largeScreen" className="hidden lg:grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <img src={promotionalOffers[1].image} className="w-full h-full object-cover" alt={`${promotionalOffers[1].itemName}`} />
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <img src={promotionalOffers[1].image} className="w-full h-full object-cover" alt={`${promotionalOffers[1].itemName}`} />
          <img src={promotionalOffers[2].image} className="w-full h-full object-cover" alt={`${promotionalOffers[2].itemName}`} />
        </div>
      </div>


      <div className="lg:hidden block relative">
        {promotionalOffers.map(({ src, alt }, index) => (
          <img alt={alt} key={index} src={src}
            className={`h-full w-full object-cover object-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>



    </div>
  );
};

export default Promotions
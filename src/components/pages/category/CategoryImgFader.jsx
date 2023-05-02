import { useState, useEffect } from 'react';

export default function CategoryImgFader({ imageSet }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const numbers = [5500, 8000, 2000];
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % imageSet.length);
    }, numbers[Math.floor(Math.random() * numbers.length)]);

    return () => clearInterval(interval);
  }, [imageSet, currentImage]);

  if (!imageSet || imageSet.length === 0) {
    return null;
  }

  return (
    <>
      {imageSet.map(({ src, alt }, index) => (
        <img
          alt={alt}
          key={index}
          src={src}
          className={`absolute h-full w-full object-cover object-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  );
}

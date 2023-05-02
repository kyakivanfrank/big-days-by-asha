import { useState, useEffect } from 'react';

const numbers = [5000, 8000, 2000,  10000];

export default function CategoryImgFader({ imageSet }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % imageSet.length);
    }, numbers[Math.floor(Math.random() * numbers.length)]);

    return () => clearInterval(interval);
  }, [imageSet]);

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
          className={`absolute h-full w-full object-cover object-center transition-opacity duration-200 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  );
}


import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

const LazyImage = ({ src, alt, className = '', imgClassName = '' }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageRef, setImageRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef) {
      observer.observe(imageRef);
    }

    return () => {
      if (imageRef) {
        observer.disconnect();
      }
    };
  }, [imageRef]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={setImageRef}
      className={`${className} overflow-hidden relative`}
    >
      {(isVisible || isLoaded) && (
        <img
          src={src}
          alt={alt}
          className={`${imgClassName} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
        />
      )}
      {!isLoaded && (
        <div
          className={`${imgClassName} absolute inset-0 bg-gray-200 animate-pulse`}
        ></div>
      )}
    </div>
  );
};

export default LazyImage;

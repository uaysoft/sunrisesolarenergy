
import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '', 
  priority = false,
  objectFit = 'cover'
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const [imageRef, setImageRef] = useState<HTMLDivElement | null>(null);
  const [error, setError] = useState(false);

  // Fix image paths that include public/ prefix
  const imageSrc = src.startsWith('/public/') ? src.replace('/public/', '/') : src;

  useEffect(() => {
    // If image is priority, skip intersection observer
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px 0px' } // Start loading when image is 200px from viewport
    );

    if (imageRef) {
      observer.observe(imageRef);
    }

    return () => {
      if (imageRef) {
        observer.disconnect();
      }
    };
  }, [imageRef, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setError(true);
    setIsLoaded(true); // Consider the loading as done even if it's an error
  };

  const objectFitClass = `object-${objectFit}`;

  return (
    <div
      ref={setImageRef}
      className={`${className} overflow-hidden relative`}
    >
      {(isVisible || isLoaded) && !error && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${imgClassName} ${objectFitClass} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {!isLoaded && (
        <div
          className={`${imgClassName} absolute inset-0 bg-gray-200 animate-pulse`}
          aria-hidden="true"
        ></div>
      )}
      {error && (
        <div
          className={`${imgClassName} flex items-center justify-center bg-gray-100 text-gray-400`}
          aria-hidden="true"
        >
          <span className="text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;

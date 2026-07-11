import React, { useState, useEffect } from 'react';

const Carousel = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (isHovered || count === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % count);
    }, 1500);
    
    return () => clearInterval(interval);
  }, [isHovered, count]);

  const handleSlideClick = (index, isActive) => {
    if (isActive) {
      if (onImageClick) onImageClick(images[index]);
    } else {
      setCurrentIndex(index);
    }
  };

  if (!images || count === 0) return null;

  return (
    <div 
      className="relative w-full max-w-[800px] mx-auto my-8 md:my-12 [perspective:2000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[4/3] md:aspect-[25/9] flex justify-center items-center [transform-style:preserve-3d]">
        {images.map((img, i) => {
          let stateClass = 'hidden-slide';
          if (i === currentIndex) stateClass = 'active';
          else if (i === (currentIndex - 1 + count) % count) stateClass = 'prev';
          else if (i === (currentIndex + 1) % count) stateClass = 'next';

          // Base classes for every slide: restricted to full height so images don't break out
          let slideClasses = "absolute w-[85%] md:w-[70%] h-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer rounded-xl ";
          
          // Add specific state transforms
          if (stateClass === 'active') {
            slideClasses += "[transform:translateX(0)_scale(1)_rotateY(0deg)_translateZ(10px)] z-[10] opacity-100 pointer-events-auto";
          } else if (stateClass === 'prev') {
            slideClasses += "[transform:translateX(-80%)_scale(0.8)_rotateY(-40deg)_translateZ(0)] z-[5] opacity-30 pointer-events-auto";
          } else if (stateClass === 'next') {
            slideClasses += "[transform:translateX(80%)_scale(0.8)_rotateY(40deg)_translateZ(0)] z-[5] opacity-30 pointer-events-auto";
          } else {
            slideClasses += "[transform:translateX(0)_scale(0.5)_rotateY(0deg)_translateZ(-100px)] z-[1] opacity-0 pointer-events-none";
          }

          return (
            <div
              key={i}
              onClick={() => handleSlideClick(i, stateClass === 'active')}
              className={slideClasses}
              style={{
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity'
              }}
            >
              <img 
                src={img} 
                alt={`Slide ${i}`} 
                className="w-full h-full rounded-xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.5)] block bg-[#1a1a1a]"
              />
            </div>
          );
        })}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-5">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === currentIndex ? 'bg-theme-2 scale-125' : 'bg-theme-5/30 hover:bg-theme-5/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

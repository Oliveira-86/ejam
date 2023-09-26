import Image from "next/image";
import React from "react";

interface ArrowsProps {
    prevSlide: () => void
    nextSlide: () => void
}

const  Arrows: React.FC<ArrowsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <div className="z-50">
      <span className="prev" onClick={prevSlide}>
       <Image 
            alt="arrow left"
            src='/icons/prev.svg'
            height={20}
            width={20}
       />
      </span>
      <span className="next" onClick={nextSlide}>
        <Image 
            alt="arrow left"
            src='/icons/next.svg'
            height={20}
            width={20}
        />
      </span>
    </div>
  );
}

export default Arrows;
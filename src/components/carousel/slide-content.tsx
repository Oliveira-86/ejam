import Image from "next/image";
import React from "react";

interface SliderContentProps {
    activeIndex: number
    sliderImage: PromotionProps[]
}

export interface PromotionProps { 
    id: number
    src: string
    label: string
}

const  SliderContent: React.FC<SliderContentProps> = ({ activeIndex, sliderImage }) => {
  return (
    <section className="h-10" >
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <Image width={20} height={20} src={slide.src} alt={slide.label} />
          <h2 className="text-xs text-white ml-2">{slide.label}</h2>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
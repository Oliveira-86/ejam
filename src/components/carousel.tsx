import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { promotion } from '@/mock/navbar';

interface ItemProps {
  src: string
  label: string
  alt: string
}

const CarouselComponent = () => {
  const Item = ({ src, label, alt }: ItemProps) => ( 
    <div className="w-full flex items-center justify-center gap-x-3">
        <Image 
            alt={alt}
            src={src}
            width={20}
            height={20}
        />
        <p className="text-white text-xs font-medium">{label}</p>
    </div>
)

  return (
    <Carousel axis='horizontal' centerMode>
      {promotion.map((item) => (
        <Item 
          key={item.id}
          src={item.src}
          label={item.label}
          alt=''
        />
      ))}
</Carousel>
  );
};

export default CarouselComponent;
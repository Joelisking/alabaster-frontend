import React from 'react';
import Image from 'next/image';
import img from '@/public/LooperGroup2.svg';

function BackgroundImage() {
  return (
    <div className="absolute inset-0 h-full w-full z-10 overflow-hidden">
      <div className="relative h-full w-full max-w-6xl mx-auto md:hidden">
        <div className="absolute left-0 top-0 bottom-0 h-full w-auto aspect-[1.5/1]">
          <Image
            src={img}
            alt="Background decoration"
            fill
            className="object-contain object-left"
            style={{
              height: '100%',
              // width: 'auto',
            }}
          />
        </div>
      </div>

      <div className="h-full hidden md:block">
        <Image
          src={img}
          alt="Background decoration"
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
}

export default BackgroundImage;

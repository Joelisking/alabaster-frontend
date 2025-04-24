import React from 'react';
import Image from 'next/image';
import img from '@/public/LooperGroup2.svg';

function BackgroundImage() {
  return (
    <div className="absolute inset-y-0 left-0 h-full flex items-center z-10">
      <div className="h-full">
        <Image
          src={img}
          alt="svg"
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

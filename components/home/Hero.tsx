import React from 'react';
import Container from '../shared/container';

import Image from 'next/image';
import img from '@/public/hero.png';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';

function Hero() {
  return (
    <Container>
      <div className="w-2/3">
        <h1 className="font-bold text-6xl">
          <span className="text-primary">Rent</span>-a-Car for Your
          Next Road Adventure!
          <span className="bg-gray-200 p-2 text-sm font-normal rounded -mt-4">
            We&apos;re Swift, Safe & Reliable!
          </span>
        </h1>
        <Button className="flex items-center mt-4">
          Get Started
          <Icon name="ArrowRight" />
        </Button>
      </div>

      <div className="flex justify-center mt-5">
        <Image src={img} alt="Hero Image" />
      </div>
    </Container>
  );
}

export default Hero;

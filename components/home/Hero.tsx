import React from 'react';
import Container from '../shared/container';
import Image from 'next/image';
import img from '@/public/starex-hero.jpg';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';
import Link from 'next/link';

function Hero() {
  return (
    <Container>
      {/* For larger screens - original layout */}
      <div className="hidden md:block">
        <div className="w-2/3">
          <h1 className="font-bold text-6xl">
            <span className="text-primary">Rent</span>-a-Car for Your
            Next Road Adventure!
            <span className="bg-gray-200 p-2 text-sm font-normal rounded -mt-4">
              We&apos;re Swift, Safe & Reliable!
            </span>
          </h1>
          <Link
            href={'#fleet'}
            className="inline-flex hover:scale-105 transition-all duration-300">
            <Button className="flex items-center mt-4">
              Get Started
              <Icon name="ArrowRight" />
            </Button>
          </Link>
        </div>

        <div className="flex justify-center mt-5">
          <Image src={img} alt="Hero Image" />
        </div>
      </div>

      {/* For mobile screens - optimized layout */}
      <div className="md:hidden">
        <div className="w-full text-center">
          <h1 className="font-bold text-3xl">
            <span className="text-primary">Rent</span>-a-Car for Your
            Next Road Adventure!
            <div className="bg-gray-200 p-2 text-sm font-normal rounded mt-2 inline-block">
              We&apos;re Swift, Safe & Reliable!
            </div>
          </h1>
          <Button className="flex items-center justify-center gap-2 mt-4 mx-auto">
            Get Started
            <Icon name="ArrowRight" />
          </Button>
        </div>

        <div className="flex justify-center mt-5">
          <Image
            src={img}
            alt="Hero Image"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;

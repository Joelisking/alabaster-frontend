import React from 'react';
import { Button, Icon } from '@/components/ui';
import Image from 'next/image';
import img from '@/public/LooperGroup.svg';
import Link from 'next/link';

function HelpBanner() {
  return (
    <section className="bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] text-white py-8 md:py-16 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Desktop version - original layout */}
        <div className="hidden md:block relative z-20">
          <div className="w-4/5">
            <span className="uppercase font-semibold">
              how can we help you
            </span>

            <div className="mt-6">
              <h2 className="sm:text-5xl lg:text-6xl font-bold">
                Welcome To Alabaster <br />
                Car Rentals and Tours Ltd.
              </h2>
              <p className="mt-3">
                We offer chauffer driven car rentals, corporate
                shuttle services and tours in Ghana. We operate a vast
                fleet of vehicles ranging from sedans, SUVs, mini-vans
                and buses. Our office is located at Granada Hotel,
                within the Accra Polo Court catchment area, Liberation
                Road, just about a five-minute drive from the Kotoka
                International Airport (KIA) in Accra. Your next road
                adventure begins with Alabaster Car Rentals -
                We&apos;re Swift, Safe & Reliable!
              </p>
            </div>
          </div>
          <Link
            href={'/#fleet'}
            className="inline-flex hover:scale-105 transition-all duration-300">
            <Button
              variant={'primary'}
              className="flex items-center mt-6">
              Read More
              <Icon name="ArrowRight" />
            </Button>
          </Link>
        </div>

        {/* Mobile version - optimized layout */}
        <div className="md:hidden relative z-20">
          <div className="w-4/5 sm:w-3/4">
            <span className="uppercase font-semibold">
              how can we help you
            </span>

            <div className="mt-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Welcome To Alabaster Car Rentals and Tours Ltd.
              </h2>
              <p className="mt-3 text-sm">
                We offer chauffer driven car rentals, corporate
                shuttle services and tours in Ghana. We operate a vast
                fleet of vehicles ranging from sedans, SUVs, mini-vans
                and buses.
              </p>
            </div>
          </div>
          <Link
            href={'/about'}
            className="inline-flex hover:scale-105 transition-all duration-300">
            <Button
              variant={'primary'}
              className="flex items-center gap-2 mt-6 w-auto">
              Read More
              <Icon name="ArrowRight" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Image - absolute positioned for both mobile and desktop */}
      <div className="absolute top-0 bottom-0 right-0 h-full w-full ">
        <div className="relative h-full w-full">
          <Image
            src={img}
            alt="svg"
            className="h-full w-full object-cover lg:object-contain object-right opacity-70 lg:opacity-100 transition-all duration-300"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HelpBanner;

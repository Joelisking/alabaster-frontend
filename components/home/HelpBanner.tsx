import React from 'react';
import { Button, Icon } from '@/components/ui';
import Image from 'next/image';
import img from '@/public/LooperGroup.svg';

function HelpBanner() {
  return (
    <section className="bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] text-white py-16 relative">
      <div className="max-w-7xl mx-auto py-16">
        <div className="w-3/4">
          <span className="uppercase font-semibold">
            how can we help you
          </span>

          <div className="mt-6">
            <h2 className="text-6xl font-bold">
              Welcome To Alabaster <br />
              Car Rentals and Tours Ltd.
            </h2>
            <p className="mt-3">
              We offer chauffer driven car rentals, corporate shuttle
              services and tours in Ghana. We operate a vast fleet of
              vehicles ranging from sedans, SUVs, mini-vans and buses.
              Our office is located at Granada Hotel, within the Accra
              Polo Court catchment area, Liberation Road, just about a
              five-minute drive from the Kotoka International Airport
              (KIA) in Accra. Your next road adventure begins with
              Alabaster Car Rentals - We&apos;re Swift, Safe &
              Reliable!
            </p>
          </div>
        </div>
        <Button
          variant={'primary'}
          className="flex items-center mt-6">
          Read More
          <Icon name="ArrowRight" />
        </Button>

        <div className="absolute inset-y-0 right-0 h-full flex items-center">
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
      </div>
    </section>
  );
}

export default HelpBanner;

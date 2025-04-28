'use client';
import React from 'react';
import Image from 'next/image';
import { IFleetCard } from '@/lib/types';
import { urlFor } from '@/lib/sanity';
import { useRouter } from 'next/navigation';

interface FleetProps {
  data: IFleetCard;
}

function FleetCard({ data }: FleetProps) {
  const router = useRouter();
  return (
    <div
      className="rounded-xl p-3 md:p-4 border border-border shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => {
        router.push(`/fleet/${data.currentSlug}`);
      }}>
      <div className="bg-secondary rounded-xl">
        <Image
          src={urlFor(data?.mainImage)?.url()}
          width={300}
          height={200}
          alt={`${data.title}`}
          className="w-full h-[250px] object-cover rounded-xl"
        />
      </div>

      <div className="mt-5 md:mt-7">
        <p className="font-semibold text-lg md:text-xl">
          {data.title}
        </p>
        {/* <p className="font-semibold text-lg md:text-xl">
          {data.vehicleType} - {data.tripType}
        </p> */}
      </div>

      <div className="flex flex-wrap gap-2 capitalize mt-3">
        <span className="bg-secondary py-1 px-3 md:px-4 rounded text-sm md:text-base">
          {data.vehicleDetails.fuelType}
        </span>
        <span className="bg-secondary py-1 px-3 md:px-4 rounded text-sm md:text-base">
          {data.vehicleDetails.year}
        </span>
        <span className="bg-secondary py-1 px-3 md:px-4 rounded text-sm md:text-base">
          {data.vehicleDetails.seats} seats
        </span>
      </div>

      <div className="mt-4 md:mt-5">
        <span className="bg-secondary font-extrabold py-1 px-3 md:px-4 rounded text-lg md:text-xl">
          <span>
            GHC
            {Math.min(...data.tripTypes.map((t) => t.price.amount))}
          </span>
          <span> - </span>
          <span>
            GHC
            {Math.max(...data.tripTypes.map((t) => t.price.amount))}
          </span>
        </span>
      </div>
    </div>
  );
}

export default FleetCard;

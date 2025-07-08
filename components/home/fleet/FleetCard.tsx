'use client';
import React from 'react';
import Image from 'next/image';
import { IFleetCard, GlobalSettings } from '@/lib/types';
import { urlFor } from '@/lib/sanity';
import { useRouter } from 'next/navigation';

interface FleetProps {
  data: IFleetCard;
  globalSettings: GlobalSettings;
}

function FleetCard({ data, globalSettings }: FleetProps) {
  const router = useRouter();

  const getDisplayPrices = () => {
    if (!data.priceRange) return { min: 0, max: 0 };
    const { min, max } = data.priceRange;
    if (globalSettings.displayCurrency === 'GHS') {
      return {
        min: min * globalSettings.exchangeRate,
        max: max * globalSettings.exchangeRate,
      };
    }
    return { min, max };
  };

  const { min, max } = getDisplayPrices();
  const currencySymbol =
    globalSettings.displayCurrency === 'GHS' ? 'GH₵' : '$';

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
      </div>

      <div className="flex flex-wrap gap-2 capitalize mt-3">
        <span className="bg-secondary py-1 px-3 md:px-4 rounded text-sm md:text-base">
          {data.vehicleDetails.fuelType}
        </span>
        <span className="bg-secondary py-1 px-3 md:px-4 rounded text-sm md:text-base">
          {data.category.title}
        </span>
        <span className="bg-secondary py-1 px-3 md:px-4 rounded text-sm md:text-base">
          {data.vehicleDetails.seats} seats
        </span>
      </div>

      <div className="mt-4 md:mt-5">
        <span className="bg-secondary font-extrabold py-1 px-3 md:px-4 rounded text-lg md:text-xl">
          {min === max ? (
            <span>
              {currencySymbol}
              {min.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          ) : (
            <>
              <span>
                {currencySymbol}
                {min.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span> - </span>
              <span>
                {currencySymbol}
                {max.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </>
          )}
        </span>
      </div>
    </div>
  );
}

export default FleetCard;

'use client';
import { GlobalSettings, TripTypePricing } from '@/lib/types';
import { useState } from 'react';
import TripTypeSelect from './trip-type-select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Image from 'next/image';
import img from '@/public/looper-group.svg';

interface TripTypeSelectorProps {
  tripTypes: TripTypePricing[];
  defaultValue: string;
  globalSettings: GlobalSettings;
}

export default function TripTypeSelector({
  tripTypes,
  defaultValue,
  globalSettings,
}: TripTypeSelectorProps) {
  const [selectedTripType, setSelectedTripType] =
    useState(defaultValue);

  const getDisplayPrice = (priceUSD: number) => {
    if (globalSettings.displayCurrency === 'GHS') {
      return priceUSD * globalSettings.exchangeRate;
    }
    return priceUSD;
  };

  const currencySymbol =
    globalSettings.displayCurrency === 'GHS' ? 'GH₵' : '$';

  // Find the selected trip type object (for Select scenario)
  const selectedType = tripTypes.find(
    (type: TripTypePricing) => type.tripType._id === selectedTripType
  );

  return (
    <>
      {tripTypes.length > 2 ? (
        // Use Select for more than 2 trip types
        <div className="w-full mt-4">
          <TripTypeSelect
            defaultValue={defaultValue}
            tripTypes={tripTypes}
            setSelectedTripType={setSelectedTripType}
          />
          {/* Background image container */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden z-20">
              <Image
                src={img}
                alt=""
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            {selectedType && (
              <div className="mt-4 bg-card-foreground rounded-2xl px-9 pt-4 pb-8 relative z-10">
                <span className="text-white text-sm">
                  {selectedType.tripType.description}
                </span>
                <div className="flex flex-col mt-5">
                  <span className="text-primary text-3xl lg:text-5xl font-bold z-30">
                    {currencySymbol}
                    {getDisplayPrice(
                      selectedType.price
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span className="text-white text-3xl lg:text-5xl font-bold">
                    /per day
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Use Tabs for 2 or fewer trip types
        <Tabs
          defaultValue={defaultValue}
          className="w-full lg:w-full mt-4"
          onValueChange={setSelectedTripType}>
          <TabsList className="grid w-full grid-cols-2 gap-3">
            {tripTypes.map((tripType: TripTypePricing) => (
              <TabsTrigger
                key={tripType._key}
                value={tripType.tripType._id}>
                {tripType.tripType.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Background image container */}
          <div className="relative mt-16">
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden z-20">
              <Image
                src={img}
                alt=""
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            {tripTypes.map((type: TripTypePricing) => (
              <TabsContent value={type.tripType._id} key={type._key}>
                <div className="bg-card-foreground rounded-2xl px-9 pt-4 pb-8 relative z-10">
                  <span className="text-white text-sm">
                    {type.tripType.description}
                  </span>
                  <div className="flex flex-col mt-5">
                    <span className="text-primary text-3xl lg:text-5xl font-bold z-30">
                      {currencySymbol}
                      {getDisplayPrice(
                        type.price // Use current type's price
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <span className="text-white text-3xl lg:text-5xl font-bold">
                      /per day
                    </span>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      )}
    </>
  );
}

'use client';
import { VehicleTripType } from '@/lib/types';
import { useState } from 'react';
import TripTypeSelect from './trip-type-select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Image from 'next/image';
import img from '@/public/looper-group.svg';

// Client-side component for handling the trip type selection
export default function TripTypeSelector({
  tripTypes,
  defaultValue,
}: {
  tripTypes: VehicleTripType[];
  defaultValue: string;
}) {
  const [selectedTripType, setSelectedTripType] =
    useState(defaultValue);

  // Find the selected trip type object
  const selectedType = tripTypes.find(
    (type: VehicleTripType) => type.tripType._id === selectedTripType
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
          {/* Background image container positioned outside the TabsContent */}
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
                    {selectedType.price.currency}
                    {selectedType.price.amount}
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
            {tripTypes.map((tripType: VehicleTripType) => (
              <TabsTrigger
                key={tripType._key}
                value={tripType.tripType._id}>
                {tripType.tripType.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Background image container positioned outside the TabsContent */}
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
            {tripTypes.map((type: VehicleTripType) => (
              <TabsContent value={type.tripType._id} key={type._key}>
                <div className="bg-card-foreground rounded-2xl px-9 pt-4 pb-8 relative z-10">
                  <span className="text-white text-sm">
                    {type.tripType.description}
                  </span>
                  <div className="flex flex-col mt-5">
                    <span className="text-primary text-5xl font-bold z-30">
                      {type.price.currency}
                      {type.price.amount}
                    </span>
                    <span className="text-white text-5xl font-bold">
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

import React from 'react';
import FleetCard from './FleetCard';
import { client } from '@/lib/sanity';
import { IFleetCard } from '@/lib/types';

async function getData() {
  const query = `
    *[_type == 'vehicle'] {
      _id,
      title,
      mainImage,
      vehicleDetails,
      tripTypes,
      "currentSlug": slug.current,
    }`;
  const data = await client.fetch(query);
  return data;
}

async function FleetCards() {
  const fleet: IFleetCard[] = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
      {fleet.map((f) => (
        <FleetCard key={f._id} data={f} />
      ))}
    </div>
  );
}

export default FleetCards;

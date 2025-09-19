import React from 'react';
import FleetCard from './FleetCard';
import { client } from '@/lib/sanity';
import { IFleetCard } from '@/lib/types';
import { FLEET_QUERY, GLOBAL_SETTINGS_QUERY } from '@/lib/queries';

export const revalidate = 0;

async function getData() {
  const [fleet, globalSettings] = await Promise.all([
    client.fetch(FLEET_QUERY),
    client.fetch(GLOBAL_SETTINGS_QUERY),
  ]);
  return { fleet, globalSettings };
}

async function FleetCards() {
  const { fleet, globalSettings } = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
      {fleet.map((f: IFleetCard) => (
        <FleetCard
          key={f._id}
          data={f}
          globalSettings={globalSettings}
        />
      ))}
    </div>
  );
}

export default FleetCards;

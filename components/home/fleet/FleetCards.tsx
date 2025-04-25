import React from 'react';
import FleetCard from './FleetCard';
import { fleet } from '@/lib/data';

function FleetCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
      {fleet.map((f) => (
        <FleetCard key={f.id} data={f} />
      ))}
    </div>
  );
}

export default FleetCards;

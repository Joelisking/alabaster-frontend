import React from 'react';
import FleetCard from './FleetCard';
import { fleet } from '@/lib/data';

function FleetCards() {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8 mt-8">
      {fleet.map((f) => (
        <FleetCard key={f.id} data={f} />
      ))}
    </div>
  );
}

export default FleetCards;

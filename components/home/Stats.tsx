import React from 'react';
import Container from '../shared/container';
import { stats } from '@/lib/data';

function Stats() {
  return (
    <Container className="mt-12 bg-secondary rounded-2xl">
      <div className="px-8 py-16 flex">
        <div className="w-1/5">
          <span className="text-5xl font-light">
            We are good at what we do!!!
          </span>
        </div>

        <div className="grid grid-cols-4 gap-3 w-4/5">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-4 rounded-lg">
              <p className="text-base font-semibold mb-24 uppercase w-1/2">
                {stat.title}
              </p>
              <p className="text-6xl font-extralight">
                {stat.subText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Stats;

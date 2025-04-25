import React from 'react';
import Container from '../shared/container';
import { stats } from '@/lib/data';

function Stats() {
  return (
    <Container className="mt-12 bg-secondary rounded-2xl">
      <div className="px-4 py-8 md:px-8 md:py-12 lg:py-14 flex flex-col xl:flex-row gap-6 lg:gap-8">
        {/* Title section - adjusted for better proportion */}
        <div className="w-full xl:w-1/4">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-light">
            We are good at what we do!
          </h2>
        </div>

        {/* Stats grid - improved breakpoint handling */}
        <div className="w-full xl:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-5 lg:p-6 rounded-xl h-full">
                <p className="text-sm md:text-base font-semibold mb-6 lg:mb-10 xl:mb-24 uppercase max-w-[200px]">
                  {stat.title}
                </p>
                <p className="text-4xl md:text-5xl xl:text-6xl font-extralight">
                  {stat.subText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Stats;

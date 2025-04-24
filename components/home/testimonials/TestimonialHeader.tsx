import React from 'react';

interface TestimonialHeaderProps {
  activeDot: number;
  totalDots: number;
  setActiveDot: (index: number) => void;
}

function TestimonialHeader({
  activeDot,
  totalDots,
  setActiveDot,
}: TestimonialHeaderProps) {
  return (
    <div className="w-full md:w-1/5">
      <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
        Our Satisfied Clients
      </h2>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveDot(index)}
            className={`w-4 h-4 rounded-full transition-colors ${
              activeDot === index ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialHeader;

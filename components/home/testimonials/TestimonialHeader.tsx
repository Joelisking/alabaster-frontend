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
    <div className="w-full md:w-1/5 mb-6 md:mb-0">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 md:mb-6 text-center md:text-left">
        Our Satisfied Clients
      </h2>
      <div className="flex items-center justify-center md:justify-start gap-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveDot(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
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

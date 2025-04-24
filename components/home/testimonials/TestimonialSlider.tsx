import React, { RefObject } from 'react';
import TestimonialCard from './TestimonialCard';
import { ITestimonial } from '@/lib/types';

interface TestimonialSliderProps {
  scrollRef: RefObject<HTMLDivElement | null>;
  setIsHovered: (value: boolean) => void;
  testimonials: ITestimonial[];
}

function TestimonialSlider({
  scrollRef,
  setIsHovered,
  testimonials,
}: TestimonialSliderProps) {
  return (
    <div
      className="w-full md:w-4/5 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide pb-4 gap-4"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative"
            style={{
              scrollSnapAlign: 'start',
            }}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;

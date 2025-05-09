'use client';
import Image from 'next/image';

import quotes from '@/public/quote.svg';
import { ITestimonial } from '@/lib/types';

function TestimonialCard({ name, text }: ITestimonial) {
  return (
    <div className="bg-black border border-gray-800 pt-4 md:pt-5 px-4 md:px-7 pb-6 md:pb-10 text-white rounded-2xl h-full max-w-full md:max-w-96">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-xl md:text-2xl lg:text-3xl">
          {name}
        </span>
        <Image
          src={quotes}
          alt="Quotes"
          className="w-8 h-8 md:w-auto md:h-auto"
        />
      </div>
      <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300">
        {text}
      </p>
    </div>
  );
}

export default TestimonialCard;

'use client';
import Image from 'next/image';

import quotes from '@/public/quote.svg';
import { ITestimonial } from '@/lib/types';

function TestimonialCard({ name, text }: ITestimonial) {
  return (
    <div className="bg-black border border-gray-800 pt-5 px-7 pb-10 text-white rounded-2xl h-full max-w-96">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-2xl md:text-3xl">
          {name}
        </span>
        <Image src={quotes} alt="Quotes" />
      </div>
      <p className="mt-4 text-gray-300">{text}</p>
    </div>
  );
}

export default TestimonialCard;

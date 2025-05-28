'use client';
import Container from '@/components/shared/container';
import { Button, Icon } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function AboutLink() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample carousel images - replace with your actual images
  const carouselImages = [
    { src: '/carousel/1.jpg', alt: 'About Link 1' },
    { src: '/carousel/2.jpeg', alt: 'About Link 2' },
    { src: '/carousel/3.jpeg', alt: 'About Link 3' },
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <section className="mt-18 md:mt-24 lg:mt-28">
      <Container className="bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] flex flex-col lg:flex-row items-center justify-between rounded-2xl overflow-hidden min-h-[400px] lg:h-96">
        <div className="w-full lg:w-1/2 xl:w-1/3 flex justify-center lg:justify-end px-6 lg:px-12 pt-12 lg:pt-24 text-center lg:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Delivering professional services for decades
              <span className="text-primary">.</span>
            </h2>
            <Button variant={'primary'} className="mt-4">
              <Link href="/about" className="flex items-center gap-2">
                Explore <Icon name="ArrowRight" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full lg:w-1/2 xl:w-2/3 relative h-64 lg:h-full">
          <div className="relative overflow-hidden h-full">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}>
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Previous image">
              <Icon name="ChevronLeft" size={20} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Next image">
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-white'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutLink;

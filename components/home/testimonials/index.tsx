'use client';
import React, { useState, useRef, useEffect } from 'react';
import Container from '../../shared/container';
import { testimonials } from '@/lib/data';
import TestimonialSlider from './TestimonialSlider';
import TestimonialHeader from './TestimonialHeader';
import BackgroundImage from './BackgroundImage';

function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);
  const [testimonialsPerSlide, setTestimonialsPerSlide] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const totalDots = Math.ceil(
    testimonials.length / testimonialsPerSlide
  );

  useEffect(() => {
    // Set initial value on client-side
    const handleResize = () => {
      const newPerSlide = window.innerWidth < 768 ? 1 : 2;
      setTestimonialsPerSlide(newPerSlide);

      // Adjust active dot if needed
      const newTotalDots = Math.ceil(
        testimonials.length / newPerSlide
      );
      if (activeDot >= newTotalDots) {
        setActiveDot(newTotalDots - 1);
      }
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeDot]);

  // Rest of the useEffect hooks remain the same
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && scrollRef.current) {
        setActiveDot((prev) =>
          prev >= totalDots - 1 ? 0 : prev + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, totalDots]);

  useEffect(() => {
    if (scrollRef.current && containerRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const scrollPosition = (scrollWidth / totalDots) * activeDot;

      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeDot, totalDots]);

  return (
    <section
      className="bg-black py-8 md:py-16 relative mt-12 md:mt-24"
      ref={containerRef}>
      <Container className="z-20 relative">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 px-4 md:pl-14 py-8 md:py-20 bg-card-foreground rounded-2xl">
          <TestimonialHeader
            activeDot={activeDot}
            totalDots={totalDots}
            setActiveDot={setActiveDot}
          />

          <TestimonialSlider
            scrollRef={scrollRef}
            setIsHovered={setIsHovered}
            testimonials={testimonials}
          />
        </div>
      </Container>

      <BackgroundImage />
    </section>
  );
}

export default Testimonials;

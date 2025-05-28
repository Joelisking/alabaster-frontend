'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Image from 'next/image';

const CARD_SIZE_LG = 565;
const CARD_SIZE_SM = 390;

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

export const HighlightsCarousel = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia('(min-width: 640px)');

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia('(min-width: 640px)');

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener('resize', handleSetCardSize);

    return () =>
      window.removeEventListener('resize', handleSetCardSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] mt-7 md:mt-12"
      // style={{
      //   height: SECTION_HEIGHT,
      // }}
    >
      {testimonials.map((t, idx) => {
        let position = 0;

        if (testimonials.length % 2) {
          position = idx - (testimonials.length + 1) / 2;
        } else {
          position = idx - testimonials.length / 2;
        }

        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 md:bottom-12 left-1/2 flex -translate-x-1/2 gap-8 z-20">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white">
          <GoArrowLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white">
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: (position: number) => void;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      absolute left-1/2 top-1/2 border-black p-8 text-black transition-colors duration-500 mt-10 ${
        isActive ? 'z-10' : 'z-0'
      }`}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive
            ? CENTER_STAGGER
            : position % 2
            ? STAGGER
            : -STAGGER
        }px)`,
        rotate: isActive
          ? 0
          : position % 2
          ? ROTATE_DEG
          : -ROTATE_DEG,
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}>
      <Image
        src={testimonial.imgSrc}
        alt="Tour Image"
        width={1020}
        height={680}
      />
    </motion.div>
  );
};

type TestimonialType = {
  tempId: number;
  imgSrc: string;
};

const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    imgSrc: '/tour/tour1.jpg',
  },
  {
    tempId: 1,
    imgSrc: '/tour/tour2.jpg',
  },
  {
    tempId: 2,
    imgSrc: '/tour/tour3.jpg',
  },
  {
    tempId: 3,
    imgSrc: '/tour/tour4.jpeg',
  },
  {
    tempId: 4,
    imgSrc: '/tour/tour1.jpg',
  },
  {
    tempId: 5,
    imgSrc: '/tour/tour3.jpg',
  },
  {
    tempId: 6,
    imgSrc: '/tour/tour4.jpeg',
  },
  {
    tempId: 7,
    imgSrc: '/tour/tour2.jpg',
  },
  {
    tempId: 8,
    imgSrc: '/tour/tour3.jpg',
  },
  {
    tempId: 9,
    imgSrc: '/tour/tour4.jpg',
  },
  {
    tempId: 10,
    imgSrc: '/tour/tour1.jpg',
  },
  {
    tempId: 11,
    imgSrc: '/tour/tour2.jpg',
  },
  {
    tempId: 12,
    imgSrc: '/tour/tour3.jpg',
  },
];

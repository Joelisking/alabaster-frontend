import React from 'react';
import Container from '../shared/container';
import { HighlightsCarousel } from './HighlightsCarousel';

function TourHighlights() {
  return (
    <section className="mt-10">
      <Container>
        <h2 className="capitalize text-3xl md:text-5xl xl:text-6xl font-bold">
          tour highlights
        </h2>

        <HighlightsCarousel />
      </Container>
    </section>
  );
}

export default TourHighlights;

import React from 'react';
import Container from '../shared/container';
import { HighlightsCarousel } from './HighlightsCarousel';

function TourHighlights() {
  return (
    <section>
      <Container>
        <h2 className="capitalize text-6xl font-bold mt-6">
          tour highlights
        </h2>

        <HighlightsCarousel />
      </Container>
    </section>
  );
}

export default TourHighlights;

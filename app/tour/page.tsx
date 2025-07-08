import PageHeader from '@/components/shared/page-header';
import TourHighlights from '@/components/tour/TourHighlights';
import TourLocations from '@/components/tour/TourLocations';
import GallerySection from '@/components/tour/GallerySection';
import React from 'react';

function Tour() {
  return (
    <main>
      <PageHeader title="tour ghana 🇬🇭" />
      <TourHighlights />
      <TourLocations />
      <GallerySection />
    </main>
  );
}

export default Tour;

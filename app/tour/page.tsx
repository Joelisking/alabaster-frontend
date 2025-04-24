import PageHeader from '@/components/shared/page-header';
import TourHighlights from '@/components/tour/TourHighlights';
import TourLocations from '@/components/tour/TourLocations';
import React from 'react';

function Tour() {
  return (
    <main>
      <PageHeader title="tour ghana 🇬🇭" />
      <TourHighlights />
      <TourLocations />
    </main>
  );
}

export default Tour;

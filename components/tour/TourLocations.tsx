'use client';
import React, { useState } from 'react';
import Container from '../shared/container';
import Header from '../shared/header';
import Image, { StaticImageData } from 'next/image';

// Import all necessary images
// Region Maps
import greaterAccraMap from '@/public/tour/maps/greater-accra.svg';
import ashantiRegionMap from '@/public/tour/maps/ashanti.svg';
import centralRegionMap from '@/public/tour/maps/central.svg';
import easternRegionMap from '@/public/tour/maps/eastern.svg';

// Tour Location Images
import greaterAccraImg from '@/public/tour/kwame-nkrumah.jpeg';
import ashantiRegionImg from '@/public/tour/lake-bosomtwe.jpg';
import centralRegionImg from '@/public/tour/castle.jpg';
import easternRegionImg from '@/public/tour/umbrella-rock.jpg';

// Define a type for Region
interface Region {
  id: string;
  name: string;
  description: string;
  regionMap: string | StaticImageData;
  locationImage: string | StaticImageData;
}

// Region data
const regions: Region[] = [
  {
    id: 'greater-accra',
    name: 'Greater Accra',
    description:
      'Alabaster Car Rentals & Tours Ltd, ACTL, your trusted partner for premier car rental and tour services in Ghana. As a reputable company, we are officially registered to operate in the field of Car Rentals and Tour services. Our commitment to excellence is underscored by our licensing from the Ghana Tourist Board and our active membership in the Car Rentals Association of Ghana (CRAG).',
    regionMap: greaterAccraMap,
    locationImage: greaterAccraImg,
  },
  {
    id: 'ashanti',
    name: 'Ashanti Region',
    description:
      'The Ashanti Region is known for its rich cultural heritage and historical significance. Home to the Ashanti Kingdom, this region offers unique experiences in traditional crafts, historical sites, and vibrant local culture.',
    regionMap: ashantiRegionMap,
    locationImage: ashantiRegionImg,
  },
  {
    id: 'central',
    name: 'Central Region',
    description:
      'The Central Region boasts beautiful coastal landscapes, historical slave castles, and a blend of traditional and modern Ghanaian life. Explore its rich maritime history and stunning beaches.',
    regionMap: centralRegionMap,
    locationImage: centralRegionImg,
  },
  {
    id: 'eastern',
    name: 'Eastern Region',
    description:
      'The Eastern Region is characterized by its lush landscapes, mountainous terrain, and agricultural richness. Discover scenic views, traditional crafts, and the unique culture of this diverse region.',
    regionMap: easternRegionMap,
    locationImage: easternRegionImg,
  },
];

function TourLocations() {
  const [selectedRegion, setSelectedRegion] = useState<Region>(
    regions[0]
  );

  return (
    <section className="">
      <Container>
        <Header title="tour locations" />

        <div className="mt-5 bg-secondary rounded-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-24 overflow-hidden">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4">
            {/* Region Map */}
            <div className="w-full relative aspect-square">
              <Image
                src={selectedRegion.regionMap}
                alt={`Map of ${selectedRegion.name}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Region Selector */}
            <div className="flex flex-wrap justify-center gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedRegion.id === region.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}>
                  {region.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 space-y-3 md:space-y-4 rounded-2xl w-full lg:w-1/2">
            <h2 className="capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {selectedRegion.name}
            </h2>

            <p className="md:text-lg text-gray-600">
              {selectedRegion.description}
            </p>

            <div className="relative rounded-b-xl overflow-hidden aspect-video">
              <Image
                src={selectedRegion.locationImage}
                alt={`${selectedRegion.name} Tour`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TourLocations;

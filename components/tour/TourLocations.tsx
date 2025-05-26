'use client';
import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  Camera,
  Building,
} from 'lucide-react';
import Image from 'next/image';
import img from '@/public/LooperGroup.svg';

// Define types
interface Accommodation {
  name: string;
  type: 'hotel' | 'resort' | 'lodge';
}

interface DayItinerary {
  day: number;
  title: string;
  activities: string[];
  highlights?: string[];
  image: string;
}

interface Region {
  id: string;
  name: string;
  title: string;
  description: string;
  duration: string;
  highlights: string[];
  itinerary: DayItinerary[];
  accommodations: Accommodation[];
  keyAttractions: {
    name: string;
    image: string;
  }[];
  icon?: React.ReactNode;
}

// Region data based on the tour document
const regions: Region[] = [
  {
    id: 'accra',
    name: 'Accra',
    title: 'Mo heee',
    description:
      "The City of Accra has been Ghana's capital since 1877. Spreading along the Atlantic coast, the city is well endowed with luxury hotels, excellent restaurants and nightclubs, plus rich cultural heritage sites.",
    duration: '4 Days',
    highlights: [
      'National Museum',
      'Kwame Nkrumah Mausoleum',
      'Makola Market',
      'James Town',
      'Shai Hills',
      'Tsaley Kope Beach Resort',
    ],
    keyAttractions: [
      {
        name: 'Du Bios Memorial Center',
        image: '/accra/attractions/du-bios-memorial-center.webp',
      },
      {
        name: 'Independence Square',
        image: '/accra/attractions/independence-square.jpg',
      },
      {
        name: 'National Theatre',
        image: '/accra/attractions/national-theatre.webp',
      },
      {
        name: 'Volta River Estuary',
        image: '/accra/attractions/estuary.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        activities: ['Check-in at hotel', 'Rest and orientation'],
        image: '/accra/itinerary/day1.jpg',
      },
      {
        day: 2,
        title: 'Accra City Tour',
        activities: [
          'Du Bois Memorial Center',
          'Kwame Nkrumah Museum',
          'Makola Market',
          'James Town guided tour',
        ],
        highlights: [
          "Ghana's biggest market",
          'Pan-African heritage',
          'Local fishing community',
        ],
        image: '/accra/itinerary/day2.jpg',
      },
      {
        day: 3,
        title: 'Beach & Culture',
        activities: [
          'Tsaley Kope Beach Resort',
          'Water sports (jet ski, sailing)',
          'Island communities visit',
          'Arts & crafts experience',
        ],
        highlights: [
          'Volta River estuary',
          'Basket weaving',
          'Architectural heritage sites',
        ],
        image: '/accra/itinerary/day3.jpg',
      },
      {
        day: 4,
        title: 'Nature Adventure',
        activities: [
          'Shai Hills hiking',
          'Bird watching',
          'Cave exploration',
          'University of Ghana visit',
        ],
        highlights: [
          'Mountain climbing',
          'Wildlife spotting',
          'Educational tour',
        ],
        image: '/accra/itinerary/day4.jpg',
      },
    ],
    accommodations: [
      { name: 'Tomriek Hotel', type: 'hotel' },
      { name: 'Coconut Grove Regency Hotel', type: 'hotel' },
      { name: 'La Villa Boutique Hotel', type: 'hotel' },
      { name: 'Accra City Hotel', type: 'hotel' },
      { name: 'Maxlot Hotel', type: 'hotel' },
    ],
  },
  {
    id: 'cape-coast',
    name: 'Cape Coast',
    title: 'Akwaaba',
    description:
      'Cape Coast is one of the most historical cities in Ghana and capital of the Central Region. Former center of British administration, it offers stunning palm-fringed scenery and important historical sites.',
    duration: '4 Days',
    highlights: [
      'Cape Coast Castle',
      'Elmina Castle',
      'Kakum National Park',
      'Canopy Walkway',
      'Assin-Manso',
      'Slave Route Heritage',
    ],
    keyAttractions: [
      {
        name: 'Tropical Rainforest',
        image: '/cape-coast/attractions/forest.jpg',
      },
      {
        name: 'Slave Dungeons',
        image: '/cape-coast/attractions/dungeon.jpg',
      },
      {
        name: 'Atlantic Beaches',
        image: '/cape-coast/attractions/cape-coast-beach.jpg',
      },
      {
        name: 'Pusuban Shrine',
        image: '/cape-coast/attractions/posuban-shrines.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        activities: [
          'Travel from Accra (175km)',
          'Check-in at coastal hotel',
        ],
        image: '/cape-coast/itinerary/day1.jpg',
      },
      {
        day: 2,
        title: 'Rainforest Adventure',
        activities: [
          'Kakum National Park tour',
          'Canopy walkway experience',
          'Medicinal plants discovery',
        ],
        highlights: [
          'Undisturbed tropical rainforest',
          '7 suspended bridges',
          'Rich biodiversity',
        ],
        image: '/cape-coast/itinerary/day2.jpg',
      },
      {
        day: 3,
        title: 'Historical Heritage',
        activities: [
          'Cape Coast Castle tour',
          'Elmina Castle visit',
          'Beach relaxation and lunch',
        ],
        highlights: [
          'Slave dungeons',
          'Colonial architecture',
          'Maritime history',
          'White sand beaches',
        ],
        image: '/cape-coast/itinerary/day3.webp',
      },
      {
        day: 4,
        title: 'Cultural Route',
        activities: [
          'Assin-Manso visit',
          'Pusuban Shrine tour',
          'Return journey to Accra',
        ],
        highlights: [
          'Last bath point of slaves',
          'Traditional military shrine',
          'Akan origins',
        ],
        image: '/cape-coast/itinerary/day4.jpg',
      },
    ],
    accommodations: [
      { name: 'Hans Cottage', type: 'hotel' },
      { name: 'Coconut Grove Beach Resort', type: 'resort' },
      { name: 'Busua Beach Resort', type: 'resort' },
    ],
  },
  {
    id: 'volta',
    name: 'Volta Region',
    title: 'Woezor',
    description:
      "The most easterly region with wonderful river estuary, bordering Togo. An area of extraordinary scenic beauty with lagoons, mountains, waterfalls, and Ghana's highest peak.",
    duration: '6 Days',
    highlights: [
      'Wli Waterfalls',
      'Mount Afadja',
      'Akosombo Dam',
      'Kente Weaving',
      'Tafi Atome Monkeys',
      'Zipline Experience',
    ],
    keyAttractions: [
      {
        name: 'Tallest waterfall in West Africa',
        image: '/volta/attractions/wli.jpg',
      },
      {
        name: 'Highest peak in Ghana',
        image: '/volta/attractions/afadja.jpg',
      },
      {
        name: 'Avu Lagoon',
        image: '/volta/attractions/avu-lagoon.jpg',
      },
      {
        name: 'Keta Historical Sites',
        image: '/volta/attractions/keta.jpeg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        activities: ['Travel preparation', 'Hotel check-in'],
        image: '/volta/itinerary/day1.webp',
      },
      {
        day: 2,
        title: 'Journey to Ho',
        activities: [
          'Scenic drive to Ho',
          'Akosombo Dam stopover',
          'Regional exploration',
        ],
        highlights: [
          'Dam engineering marvel',
          'Eastern-Volta region link',
          'Scenic landscapes',
        ],
        image: '/volta/itinerary/day2.webp',
      },
      {
        day: 3,
        title: 'Eco-Adventure',
        activities: [
          'Tafi Atome monkey sanctuary',
          'Kpando zipline experience',
          'Hloma lodge near Wli',
        ],
        highlights: [
          'Ecotourism project',
          'Friendly monkeys',
          'Adventure sports',
        ],
        image: '/volta/itinerary/day3.jpg',
      },
      {
        day: 4,
        title: 'Wli Waterfalls',
        activities: [
          'Early morning waterfall hike',
          'Swimming and relaxation',
          'Nature photography',
        ],
        highlights: [
          '143 meters tall',
          "West Africa's tallest",
          'Sheer grandeur and beauty',
        ],
        image: '/volta/itinerary/day4.jpg',
      },
      {
        day: 5,
        title: 'Mount Afadja',
        activities: [
          'Mountain hiking adventure',
          'Cave exploration',
          'Summit at 885 meters',
        ],
        highlights: [
          "Ghana's highest peak",
          'Intriguing caves',
          'Panoramic views',
        ],
        image: '/volta/itinerary/day5.jpg',
      },
      {
        day: 6,
        title: 'Cultural & Historical',
        activities: [
          'Kente weaving at Kpetoe',
          'Xavi bird sanctuary',
          'Keta historical sites',
        ],
        highlights: [
          'Indigenous kente art',
          'Avu Lagoon birds',
          'Rich historical heritage',
        ],
        image: '/volta/itinerary/day6.webp',
      },
    ],
    accommodations: [
      { name: 'Wli Water Heights', type: 'hotel' },
      { name: 'Nakvic Hotel', type: 'hotel' },
      { name: 'Chances Hotel', type: 'hotel' },
      { name: 'Hotel Cisneros', type: 'hotel' },
      { name: 'Keta Resort', type: 'resort' },
      { name: 'Sogakope Beach Resort', type: 'resort' },
    ],
  },
  {
    id: 'kumasi',
    name: 'Kumasi',
    title: 'Akwaaba',
    description:
      "Capital of the Ashanti kingdom, popularly known as the 'Garden City' with numerous cultural sites including gold mines, Lake Bosomtwe, and the famous Bonwire kente village.",
    duration: '5 Days',
    highlights: [
      'Manhyia Palace Museum',
      'Lake Bosomtwe',
      'Bonwire Kente Village',
      'Okomfo Anokye Sword',
      'Adinkra Cloth Making',
      'Kejetia Market',
    ],
    keyAttractions: [
      {
        name: "Ghana's only natural lake",
        image: '/kumasi/attractions/bosomtwe.jpg',
      },
      {
        name: 'Royal Ashanti heritage',
        image: '/kumasi/attractions/heritage.jpeg',
      },
      {
        name: 'Traditional crafts',
        image: '/kumasi/attractions/trad-crafts.jpg',
      },
      {
        name: 'Kejetia market',
        image: '/kumasi/attractions/kejetia.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        activities: ['Airport/hotel transfer', 'City orientation'],
        image: '/kumasi/itinerary/day1.jpg',
      },
      {
        day: 2,
        title: 'Historical Journey',
        activities: [
          'Scenic drive via Kwahu scarps',
          'Ejisu - Yaa Asantewa hometown',
          'Historical briefing',
        ],
        highlights: [
          'Breathtaking landscapes',
          'Yaa Asantewaa heritage',
          'British-Ashanti War history',
        ],
        image: '/kumasi/itinerary/day2.jpg',
      },
      {
        day: 3,
        title: 'Royal Heritage',
        activities: [
          'Manhyia Palace Museum',
          'Okomfo Anokye Sword site',
          'Ntonso craft village',
          'Adinkra cloth making',
        ],
        highlights: [
          'Ashanti origin stories',
          'Sacred sword legend',
          'Hand-printed fabrics',
          'Traditional dye brewing',
        ],
        image: '/kumasi/itinerary/day3.jpg',
      },
      {
        day: 4,
        title: 'Natural Wonder',
        activities: [
          'Lake Bosomtwe visit',
          'Swimming and relaxation',
          'Military Fort tour',
          'Kejetia Market shopping',
        ],
        highlights: [
          "Ghana's only natural lake",
          'Kumasi beach experience',
          'Largest market in West Africa',
        ],
        image: '/kumasi/itinerary/day4.jpg',
      },
      {
        day: 5,
        title: 'Cultural Finale',
        activities: [
          'KNUST visit',
          'Bonwire kente weaving',
          'Return to Accra',
        ],
        highlights: [
          'Educational tour',
          'Traditional loom weaving',
          'Authentic kente cloth',
        ],
        image: '/kumasi/itinerary/day5.jpg',
      },
    ],
    accommodations: [
      { name: 'Royal Lamerta Hotel', type: 'hotel' },
      { name: 'Anita Hotel', type: 'hotel' },
      { name: 'Noda Hotel', type: 'hotel' },
      { name: 'Lake Bosomtwe Paradise Resort', type: 'resort' },
    ],
  },
  {
    id: 'northern',
    name: 'Northern Regions',
    title: 'Maraaba',
    description:
      'Northern, Savanna, and North East regions offer nature and culture experiences with exotic flora and fauna, savanna vegetation, and opportunities for wildlife viewing and cultural immersion.',
    duration: '7 Days',
    highlights: [
      'Mole National Park',
      'Larabanga Mosque',
      'Paga Crocodile Pond',
      'Kintampo Falls',
      'Wildlife Safari',
      'Traditional Crafts',
    ],
    keyAttractions: [
      {
        name: 'Wildlife',
        image: '/north/attractions/wildlife.jpg',
      },
      {
        name: 'Oldest mosque in Ghana',
        image: '/north/attractions/mosque.jpg',
      },
      {
        name: 'Paga crocodile pond',
        image: '/north/attractions/crocs.webp',
      },
      {
        name: 'Gambaga escarpment',
        image: '/north/attractions/escarpment.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        activities: ['Regional entry', 'Hotel accommodation'],
        image: '/north/itinerary/day1.jpg',
      },
      {
        day: 2,
        title: 'Cultural Kumasi',
        activities: [
          'Cultural center visit',
          'Prempeh II museum',
          'Okomfo Anokye Sword',
          'Ahwiaa craft village',
          'Ntonsu Adinkra village',
        ],
        highlights: [
          'Ashanti stools carving',
          'Fertility dolls',
          'Traditional cloth printing',
        ],
        image: '/north/itinerary/day2.jpg',
      },
      {
        day: 3,
        title: 'Northern Adventure',
        activities: [
          'Journey to Northern region',
          'Larabanga Mosque visit',
          'Mole Game Park arrival',
          'Early morning game viewing',
        ],
        highlights: [
          'Oldest mosque in Ghana',
          'Holy Koran from heaven',
          'Wildlife tracking',
        ],
        image: '/north/itinerary/day3.jpg',
      },
      {
        day: 4,
        title: 'Wildlife Safari',
        activities: [
          'Dedicated game viewing paths',
          'Animal tracking techniques',
          'Wildlife photography',
        ],
        highlights: [
          'Elephants, buffalo, lions',
          'Antelopes, baboons',
          'Hippos and hyenas',
        ],
        image: '/north/itinerary/day4.jpg',
      },
      {
        day: 5,
        title: 'Sacred Sanctuary',
        activities: [
          'Paga crocodile pond visit',
          'Sacred crocodile feeding',
          'Border experience',
          'Bolgatanga overnight',
        ],
        highlights: [
          'Ghana-Burkina Faso border',
          'Whistling crocodiles',
          'Sacred traditions',
        ],
        image: '/north/itinerary/day5.jpg',
      },
      {
        day: 6,
        title: 'Arts & Culture',
        activities: [
          'Bolgatanga crafts market',
          'Tamale city tour',
          'Dagomba villages visit',
        ],
        highlights: [
          'Straw baskets and crafts',
          'Northern attires',
          'Traditional villages',
        ],
        image: '/north/itinerary/day6.jpg',
      },
      {
        day: 7,
        title: 'Scenic Return',
        activities: [
          'Kintampo Falls visit',
          'Kumasi stopover',
          'Return to Accra',
        ],
        highlights: [
          'Beautiful waterfall scenery',
          'Regional transitions',
        ],
        image: '/north/itinerary/day7.jpg',
      },
    ],
    accommodations: [
      { name: 'Zaina Lodge', type: 'lodge' },
      { name: 'Nim Avenue', type: 'hotel' },
      { name: 'Mole Hotel', type: 'hotel' },
      { name: 'Grand Hyatt', type: 'hotel' },
    ],
  },
];

function TourLocations() {
  const [selectedRegion, setSelectedRegion] = useState<Region>(
    regions[0]
  );
  const [activeTab, setActiveTab] = useState<
    'overview' | 'itinerary' | 'accommodations'
  >('overview');

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Discover Ghana&apos;s{' '}
            <span className="text-primary">Tour Destinations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Ghana&apos;s diverse regions, from vibrant cities
            to pristine nature reserves, each offering unique cultural
            experiences and unforgettable adventures.
          </p>
        </div>

        {/* Region Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className={`flex items-center gap-2 px-6 py-2 text-sm rounded-full transition-all duration-300 font-medium ${
                selectedRegion.id === region.id
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-black hover:bg-gray-100 border border-gray-200'
              }`}>
              {region.icon}
              {region.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] p-8 md:p-12 text-white relative">
            <div className="absolute top-0 bottom-0 right-0 h-full w-full">
              <div className="relative h-full w-full">
                <Image
                  src={img}
                  alt="svg"
                  className="h-full w-full object-cover lg:object-contain object-right opacity-70 lg:opacity-100 transition-all duration-300"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-20">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {selectedRegion.name}
                </h2>

                <h3 className="text-lg md:text-xl font-light opacity-90 italic">
                  {selectedRegion.title}
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  {selectedRegion.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">
                      {selectedRegion.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">
                      {selectedRegion.highlights.length} Key Sites
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm relative z-20">
                {selectedRegion.highlights
                  .slice(0, 6)
                  .map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-secondary text-black px-3 py-2 rounded-lg text-center">
                      {highlight}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex">
              {(
                ['overview', 'itinerary', 'accommodations'] as const
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 text-center font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-b-2 border-primary text-primary bg-gray-50'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Key Attractions with Tour Images */}
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                    <Camera className="w-6 h-6 text-primary" />
                    Key Attractions
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedRegion.keyAttractions.map(
                      (attraction, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                          <div className="relative h-48">
                            <Image
                              src={attraction.image}
                              alt={attraction.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-white text-lg font-semibold">
                              {attraction.name}
                            </h4>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Tour Highlights
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedRegion.highlights.map(
                      (highlight, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                          <span className="font-medium text-black">
                            {highlight}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Daily Itinerary
                </h3>
                {selectedRegion.itinerary.map((day, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="relative w-full md:w-1/3 h-48 rounded-xl overflow-hidden">
                        <Image
                          src={day.image}
                          alt={day.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-black mb-2">
                          Day {day.day}: {day.title}
                        </h4>
                        <div className="space-y-2 mb-4">
                          {day.activities.map(
                            (activity, actIndex) => (
                              <div
                                key={actIndex}
                                className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                                <span className="text-gray-700">
                                  {activity}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                        {day.highlights && (
                          <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                            <span className="font-medium text-primary text-sm">
                              Highlights:{' '}
                            </span>
                            <span className="text-black text-sm">
                              {day.highlights.join(' • ')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'accommodations' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                  <Building className="w-6 h-6 text-primary" />
                  Accommodation Options
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedRegion.accommodations.map(
                    (accommodation, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-lg text-black">
                            {accommodation.name}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              accommodation.type === 'resort'
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : accommodation.type === 'lodge'
                                  ? 'bg-black/10 text-black border border-black/20'
                                  : 'bg-gray-100 text-black border border-gray-200'
                            }`}>
                            {accommodation.type
                              .charAt(0)
                              .toUpperCase() +
                              accommodation.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourLocations;

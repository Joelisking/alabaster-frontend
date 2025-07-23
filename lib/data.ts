import { ITestimonial, Region } from './types';

export const stats = [
  { id: 1, title: 'years in business', subText: '25+' },
  { id: 2, title: 'fleet of cars', subText: '50+' },
  { id: 3, title: 'successful trips', subText: '5000+' },
  { id: 4, title: 'satisfied clients', subText: '5000+' },
];

export const testimonials: ITestimonial[] = [
  {
    name: 'Rema Alma',
    text: 'Renting with Alabaster car rentals was absolute breeze! The vehicle was clean and well maintained and the staff was incredibly friendly and helpful. I will definitely be using their services again for my next trip.',
  },
  {
    name: 'Millenium Development Authority (MIDA) ',
    text: 'After our first trip with Alabaster Car Rentals, we decided they would be our go-to car rental company. The customer service is surreal & our rides are seamless, safe, and satisfying. Truly, this is a recommended car rental service for all!',
  },
  {
    name: 'Esther Cobinnah',
    text: 'My familiy and I were in Ghana from the UK for the Easter Holidays and were picked up from the airport. Even though our flight delayed, our driver was patient and acted professional. All our trips within Ghana were comfortable and safe thanks to Alabaster Car Rentals. ',
  },
  {
    name: 'Cargill Ghana Ltd.',
    text: "Alabaster Car Rentals' Corporate Shuttle Service is one of the best in Ghana! For over a decade, they continue to provide top notch staff bussing services which has increased employee satisfaction and reduced our transportation costs drastically. ",
  },
];

export const faqItems = [
  {
    id: 'item-1',
    title:
      'What type of vehicles does your car rental service offer?',
    content:
      'We offer a diverse fleet, including saloon cars, large coach-type buses, medium-size buses, mini-buses/vans, and Toyota Prado/V8-VX 4×4 SUVs.',
  },
  {
    id: 'item-2',
    title: 'How can I make a reservation?',
    content:
      'You can easily make a reservation through our website, contact our customer service, or visit our office at Polo Court, Liberation Road, Accra.',
  },
  {
    id: 'item-3',
    title: 'Do you provide self-drive services?',
    content:
      'No, we only offer professional chauffeur services. Our drivers are well-trained and familiar with local routes.',
  },
  {
    id: 'item-4',
    title: 'Can I modify or cancel my reservation?',
    content:
      'Yes, you can modify or cancel your reservation online or by contacting our customer service.',
  },
  {
    id: 'item-5',
    title: 'Is insurance included in the rental cost?',
    content:
      'All vehicles are comprehensively insured. No additional insurance charges apply. Enjoy worry-free driving with our inclusive coverage.',
  },
  {
    id: 'item-6',
    title: 'What happens in case of a breakdown or emergency?',
    content:
      'We provide 24/7 roadside assistance. Contact our office hotline, and we will assist you promptly.',
  },
  {
    id: 'item-7',
    title:
      'Can I rent a vehicle for special events like weddings or corporate functions?',
    content:
      'Absolutely! We offer specialized services for weddings, corporate events, and other special occasions. Contact our Sales team for customized solutions.',
  },
  {
    id: 'item-8',
    title: 'How are rental rates calculated?',
    content:
      'Rental rates are calculated based on the type of vehicle, rental duration, and additional fees such as VAT, NHIL, Ghana Tourism Levy and chauffeur allowances. Visit our website or contact us for a detailed quote.',
  },
  {
    id: 'item-9',
    title: 'Do you offer long-term rental options?',
    content:
      'Yes, we provide long-term rental options with special rates. Contact our Sales team for more information.',
  },
];

export const regions: Region[] = [
  {
    id: 'accra',
    name: 'Greater Accra Region',
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
    name: 'Central Region',
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
    name: 'Ashanti Region',
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
      'Gambaga Escarpment',
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
          'Gambaga Escarpment visit',
          'Kumasi stopover',
          'Return to Accra',
        ],
        highlights: ['Gambaga Escarpment', 'Regional transitions'],
        image: '/north/attractions/escarpment.jpg',
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

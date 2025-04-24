import fleet1 from '@/public/fleet/1.png';
import fleet2 from '@/public/fleet/2.png';
import hero from '@/public/hero.png';
import { ITestimonial } from './types';

export const stats = [
  { id: 1, title: 'years in business', subText: '23+' },
  { id: 2, title: 'fleet of cars', subText: '100+' },
  { id: 3, title: 'successful trips', subText: '5000+' },
  { id: 4, title: 'satisfied clients', subText: '5000+' },
];

export const fleet = [
  {
    id: 1,
    img: hero,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
  {
    id: 2,
    img: fleet1,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
  {
    id: 3,
    img: fleet2,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
  {
    id: 4,
    img: fleet2,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
  {
    id: 5,
    img: hero,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
  {
    id: 6,
    img: fleet1,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
  {
    id: 7,
    img: fleet1,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
  {
    id: 8,
    img: fleet2,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
  {
    id: 9,
    img: hero,
    name: 'Honda Accord',
    vehicleType: 'Standard Saloon',
    tripType: 'Accra Only',
    fuelType: 'petrol',
    year: 2016,
    seats: 5,
    minimumCost: 200,
    maximumCost: 900,
  },
];

export const testimonials: ITestimonial[] = [
  {
    name: 'Rema Alma',
    text: 'Renting with Alabaster car rentals was absolute breeze!! The vehicle was clean and well maintained and I really loved every bit of the experience. Renting with Alabaster car rentals was absolute breeze!! The vehicle was clean and well maintained and I really loved every bit of the experience.',
  },
  {
    name: 'James Wilson',
    text: 'I was impressed by the quality of service provided by Alabaster car rentals. The staff was friendly and helpful, and the car was in perfect condition. I would definitely recommend their services to anyone looking for a reliable car rental company.',
  },
  {
    name: 'Sarah Johnson',
    text: 'My experience with Alabaster car rentals was exceptional! The booking process was simple, pickup was quick, and the car exceeded my expectations. Their attention to detail and customer service made my trip stress-free and enjoyable.',
  },
  {
    name: 'Michael Chen',
    text: "Alabaster provided me with an excellent vehicle at a reasonable price. The car was spotless and ran perfectly throughout my trip. Their staff was professional and accommodating. I'll definitely be using their services again in the future.",
  },
  {
    name: 'Lisa Rodriguez',
    text: 'From reservation to return, Alabaster car rentals provided a seamless experience. The vehicle was exactly what I needed for my family vacation, and the pricing was transparent with no hidden fees. Highly recommend!',
  },
];

export const faqItems = [
  {
    id: 'item-1',
    title: 'What documents do I need to rent a car?',
    content:
      'To rent a car, you will need a valid driver’s license, a government-issued ID or passport, and a valid credit or debit card for payment. Additional requirements may apply for international renters.',
  },
  {
    id: 'item-2',
    title: 'What is the minimum age to rent a car?',
    content:
      'The minimum age to rent a car is typically 21 years old. However, drivers under 25 may be subject to a young driver surcharge. Please check with us for specific age requirements.',
  },
  {
    id: 'item-3',
    title: 'Can I rent a car without a credit card?',
    content:
      'Yes, you can rent a car with a debit card, but additional verification may be required. Please contact us in advance to confirm the payment options available.',
  },
  {
    id: 'item-4',
    title: 'Is insurance included in the rental price?',
    content:
      'Basic insurance is included in the rental price. However, we recommend purchasing additional coverage for extra protection. Please review our insurance options during the booking process.',
  },
  {
    id: 'item-5',
    title: 'What happens if I return the car late?',
    content:
      'If you return the car late, additional charges may apply. We offer a grace period, but beyond that, you may be charged for an extra day. Please contact us if you anticipate a delay.',
  },
];

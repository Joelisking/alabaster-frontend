/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITestimonial {
  name: string;
  text: string;
}

export interface TripTypePricing {
  _key: string;
  tripType: {
    _id: string;
    name?: string;
    description?: string;
  };
  price: number;
}

export interface IFleetCard {
  _id: string;
  title: string;
  mainImage: any;
  vehicleDetails: {
    year: number;
    fuelType: 'diesel' | 'petrol' | 'hybrid' | 'electric';
    seats: number;
  };
  tripTypes: TripTypePricing[];
  currentSlug: string;
  category: CategoryReference;
}

interface AccessoryReference {
  _id: string;
  name: string;
  description?: string;
}

interface CategoryReference {
  _id: string;
  title: string;
  description?: string;
}

export interface IVehicle {
  _id: string;
  _type: 'vehicle';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  mainImage: any;
  galleryImages?: any[];
  vehicleDetails: {
    year: number;
    fuelType: 'diesel' | 'petrol' | 'hybrid' | 'electric';
    seats: number;
  };
  description?: string;
  tripTypes: TripTypePricing[];
  accessories?: AccessoryReference[];
  category?: CategoryReference;
  slug: {
    current: string;
  };
}

export interface GlobalSettings {
  exchangeRate: number;
  displayCurrency: 'USD' | 'GHS';
}

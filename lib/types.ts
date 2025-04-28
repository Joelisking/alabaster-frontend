/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITestimonial {
  name: string;
  text: string;
}

export interface TripTypePrice {
  currency: 'GHC' | 'USD';
  amount: number;
}

interface TripTypeReference {
  _id: string;
  _ref: string;
  _type: 'reference';
  name?: string;
}

export interface VehicleTripType {
  _key?: string;
  price: TripTypePrice;
  tripType: TripTypeReference;
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
  tripTypes: VehicleTripType[];
  currentSlug: string;
}

interface TripTypeReference {
  _id: string;
  name?: string;
  description?: string;
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
  tripTypes: VehicleTripType[];
  accessories?: AccessoryReference[];
  category?: CategoryReference;
  slug: {
    current: string;
  };
}

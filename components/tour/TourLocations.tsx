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
import Container from '../shared/container';
import { regions } from '@/lib/data';
import { Region } from '@/lib/types';
import Footnote from './Footnote';

function TourLocations() {
  const [selectedRegion, setSelectedRegion] = useState<Region>(
    regions[0]
  );
  const [activeTab, setActiveTab] = useState<
    'overview' | 'itinerary' | 'accommodations'
  >('overview');

  return (
    <section className="py-12 bg-gray-50">
      <Container>
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
            <div className="absolute top-0 bottom-0 right-0 h-full w-full opacity-50 md:opacity-100">
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

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 text-sm relative z-20">
                {selectedRegion.highlights
                  .slice(0, 6)
                  .map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-secondary text-black px-3 py-2 rounded-lg text-center place-content-center">
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
                  className={`flex-1 py-4 px-6 text-xs sm:text-sm md:text-base text-center font-medium capitalize transition-colors ${
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
      </Container>
      <Footnote />
    </section>
  );
}

export default TourLocations;

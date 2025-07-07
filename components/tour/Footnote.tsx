import React from 'react';
import Container from '../shared/container';
import Image from 'next/image';
import img from '@/public/LooperGroup.svg';
import Link from 'next/link';

function Footnote() {
  return (
    <Container>
      <div className="mt-16 bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] md:p-12 text-white relative rounded-2xl p-8">
        <div className="absolute top-0 bottom-0 right-0 h-full w-full opacity-50 md:opacity-100">
          <div className="relative h-full w-full">
            <Image
              src={img}
              alt="svg"
              className="h-full w-full object-cover lg:object-contain object-right opacity-50 transition-all duration-300"
              priority
            />
          </div>
        </div>

        <div className="relative z-20">
          <div className="text-center mb-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              Explore More of Ghana
            </h3>
            <p className="italic max-w-2xl mx-auto">
              While our featured tours showcase some of Ghana&quot;s
              most popular destinations, we can organize custom tours
              to any region across the country. Here are some
              highlights from other regions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-lg text-black mb-3">
                Western Region
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Nzulezu Stilt Village</li>
                <li>• Ankasa Conservation Area</li>
                <li>• Fort Metal Cross</li>
                <li>• Busua Beach</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-lg text-black mb-3">
                Eastern Region
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Aburi Botanical Gardens</li>
                <li>• Akosombo Dam</li>
                <li>• Boti Falls</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-lg text-black mb-3">
                Bono Region
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Bui National Park</li>
                <li>• Banda Cultural Landscape</li>
                <li>• Sunyani Cultural Center</li>
                <li>• Traditional Craft Villages</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-lg text-black mb-3">
                Western North Region
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sefwi-Wiawso Palace</li>
                <li>• Bia National Park</li>
                <li>• Traditional Festivals</li>
                <li>• Cocoa Farms Tour</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-lg text-black mb-3">
                Bono East Region
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Techiman Market</li>
                <li>• Kintampo Waterfalls</li>
                <li>• Traditional Medicine</li>
                <li>• Cultural Heritage Sites</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-lg text-black mb-3">
                Oti Region
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Dambai Lakeside</li>
                <li>• Traditional Festivals</li>
                <li>• Agricultural Tours</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-200 mb-4 lg:mb-6">
              Contact us to customize your perfect Ghanaian adventure!
            </p>
            <Link
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors cursor-pointer mt-"
              href={'/contact'}>
              Plan Your Custom Tour
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footnote;

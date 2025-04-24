import React from 'react';
import Container from '../shared/container';
import Header from '../shared/header';
import Image from 'next/image';
import img from '@/public/gh-map.svg';
import greaterAccra from '@/public/tour/greater-accra.jpg';

function TourLocations() {
  return (
    <section className="mt-24">
      <Container>
        <Header title="tour locations" />

        <div className="mt-5 bg-secondary rounded-2xl px-12 py-8 space-y-4 flex items-center justify-between gap-24">
          <div className="w-1/2">
            <Image src={img} alt="Map of Ghana" />
          </div>
          <div className="bg-white px-12 py-8 space-y-3 rounded-2xl w-1/2">
            <h2 className="capitalize text-6xl font-bold">
              Greater Accra
            </h2>
            <p>
              <span className="font-bold">Bead Making:</span>{' '}
              Alabaster Car Rentals & Tours Ltd, ACTL, your trusted
              partner for premier car rental and tour services in
              Ghana. As a reputable company, we are officially
              registered to operate in the field of Car Rentals and
              Tour services. Our commitment to excellence is
              underscored by our licensing from the Ghana Tourist
              Board and our active membership in the Car Rentals
              Association of Ghana (CRAG).
            </p>

            <div>
              <Image
                src={greaterAccra}
                alt="Greater Accra Tour"
                className="rounded-b-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TourLocations;

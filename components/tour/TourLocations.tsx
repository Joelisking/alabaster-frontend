import Container from '../shared/container';
import Header from '../shared/header';
import Image from 'next/image';
import img from '@/public/gh-map.svg';
import greaterAccra from '@/public/tour/greater-accra.jpg';

function TourLocations() {
  return (
    <section className="">
      <Container>
        <Header title="tour locations" />

        <div className="mt-5 bg-secondary rounded-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-24 overflow-hidden">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={img}
              alt="Map of Ghana"
              className="object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 space-y-3 md:space-y-4 rounded-2xl w-full lg:w-1/2">
            <h2 className="capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Greater Accra
            </h2>

            <p className="md:text-lg text-gray-600">
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

            <div className="relative rounded-b-xl overflow-hidden">
              <Image
                src={greaterAccra}
                alt="Greater Accra Tour"
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

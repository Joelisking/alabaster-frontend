import React from 'react';
import Container from '../shared/container';
import Header from '../shared/header';
import Image from 'next/image';
import img from '@/public/expertise.png';

function Expertise() {
  return (
    <section className="mt-16 md:mt-24 lg:mt-32">
      <Container>
        <Header title="our expertise" />

        <div className="mt-5 bg-secondary rounded-2xl px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 flex flex-col lg:flex-row lg:items-end lg:-space-x-14">
          <div className="bg-white p-6 sm:p-8 lg:p-12 space-y-3 rounded-2xl w-full lg:w-1/2 mb-6 lg:mb-24 order-2 lg:order-1">
            <p>
              Embark on a seamless and comfortable journey with our
              diverse fleet of vehicles &quot;on-ready-marks&quot; for
              various events and activities in Ghana. Whether you are
              planning a tour, convention, seminar, workshop,
              conference, retreat, funeral, pleasure ride, engagement
              rites, wedding, or any other special occasion, we have
              the perfect transportation solution for you.
            </p>
            <p>
              Our company specializes in car rentals, offering a
              diverse fleet of vehicles to cater to various needs and
              choices. From sleek sedans to spacious family vans and
              rugged SUVs and spacious coach-type buses, we have got
              you covered. Our well-maintained vehicles are equipped
              with state-of-the art amenities, ensuring security and
              smooth and enjoyable ride.
            </p>
            <p>
              Our services extend to group and individual sightseeing
              excursions, such that, whether seeking adventure,
              relaxation or cultural immersion, our tailored packages
              promise an unforgettable experience.
            </p>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-0 lg:mb-0 flex justify-center lg:justify-start z-10">
            <div className="max-w-sm lg:max-w-none">
              <Image
                src={img}
                alt="Vehicle Image"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Expertise;

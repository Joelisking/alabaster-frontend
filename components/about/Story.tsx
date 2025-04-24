import React from 'react';
import Container from '../shared/container';

function Story() {
  return (
    <section>
      <Container className="mt-10">
        <h2 className="capitalize text-6xl font-bold">our story</h2>
        <div className="mt-7 bg-secondary p-7 space-y-4 font-light rounded-2xl">
          <div className="bg-white p-4">
            <p>
              Welcome to Alabaster Car Rentals & Tours Ltd, ACTL, your
              trusted partner for premier car rental and tour services
              in Ghana. As a reputable company, we are officially
              registered to operate in the field of Car Rentals and
              Tour services. Our commitment to excellence is
              underscored by our licensing from the Ghana Tourist
              Board and our active membership in the Car Rentals
              Association of Ghana (CRAG).
            </p>
          </div>
          <div className="bg-white p-4">
            <p>
              Our office is located at Granada Hotel, within the Polo
              Court catchment area, Liberation Road, just about a
              five-minute drive from the Kotoka International Airport
              (KIA) in Accra.
            </p>
          </div>
          <div className="bg-white p-4">
            <p>
              In recognition of our dedication and commitment in the
              Car Rental industry, Alabaster was honored with the
              prestigious &apos;Car Rental of the Year&apos; award in
              both the 2005/2006 and 2007/2008 editions of the
              biennial Ghana Tourism Awards. This noteworthy
              accomplishment reflects our unwavering commitment to
              delivering top-notch services which sets us apart as a
              trusted name in the industry.
            </p>
          </div>
          <div className="bg-white p-4">
            <p>
              For dependability, reliability and a rewarding travel
              experience, Alabaster Car Rentals & Tours Ltd,
              registered in the year 2000, has accumulated years of
              expertise and a proven track record of excellence in the
              Ghanaian tourism landscape.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Story;

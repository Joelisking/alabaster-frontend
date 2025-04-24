import Image from 'next/image';
import Container from '../shared/container';
import Header from '../shared/header';
import img from '@/public/gh-map.svg';

function TravelAndTours() {
  return (
    <section className="mt-32">
      <Container>
        <Header title="Travel & Tours 🇬🇭" />

        <div className="mt-5 bg-secondary rounded-2xl px-12 py-8 space-y-4 flex items-center justify-between gap-24">
          <div className="bg-white px-12 py-8 space-y-3 rounded-2xl w-1/2">
            <p>
              Our expert team is dedicated to crafting personalized
              travel experiences tailored to your desires and
              satisfaction. From arranging scenic road trips to
              organizing seamless travel logistics, we specialize in
              creating unforgettable and exciting adventures. Whether
              you seek a luxurious getaway or an off-the-beaten-path
              excursion, trust Alabaster Car Rentals to elevate your
              travel experience. Contact us today to start planning
              your next unforgettable journey.
            </p>
            <p>
              In summary, ACTL is your prime and ideal partner for
              seamless car rentals, value for money bus shuttle and
              memorable tourism experiences. Dedicated professionals
              who are passionate about your safety take pride in
              attention to detail, ensuring that every aspect of your
              journey is well planned and executed.
            </p>
            <p>
              Your safety, satisfaction, and security rest on the
              progressive-wheels-in-motion, as ACTL take charge to
              explore and accomplish a dream.
            </p>
          </div>

          <div className="w-1/2">
            <Image src={img} alt="Map of Ghana" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TravelAndTours;

import AboutLink from '@/components/home/about-link';
import Fleet from '@/components/home/fleet';
import HelpBanner from '@/components/home/HelpBanner';
import Hero from '@/components/home/Hero';
import Shuttle from '@/components/home/Shuttle';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/testimonials';

function Home() {
  return (
    <main>
      <Hero />
      <HelpBanner />
      <Stats />
      <AboutLink />
      <div id="fleet">
        <Fleet />
      </div>
      <Shuttle />
      <Testimonials />
    </main>
  );
}

export default Home;

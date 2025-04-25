import Fleet from '@/components/home/fleet';
import HelpBanner from '@/components/home/HelpBanner';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/testimonials';

function Home() {
  return (
    <main>
      <Hero />
      <HelpBanner />
      <Stats />
      <div id="fleet">
        <Fleet />
      </div>
      <Testimonials />
    </main>
  );
}

export default Home;

import CorporateServices from '@/components/about/CorporateServices';
import Expertise from '@/components/about/Expertise';
import Story from '@/components/about/Story';
import TravelAndTours from '@/components/about/TravelAndTours';
import PageHeader from '@/components/shared/page-header';

function About() {
  return (
    <main>
      <PageHeader title="about us" />
      <Story />
      <Expertise />
      <CorporateServices />
      <TravelAndTours />
    </main>
  );
}

export default About;

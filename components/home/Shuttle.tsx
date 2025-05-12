import Image from 'next/image';
import shuttle from '@/public/shuttle2.jpg';
import Container from '../shared/container';
import Link from 'next/link';
import { Button, Icon } from '../ui';

function Shuttle() {
  return (
    <Container className="flex items-end bg-card-foreground rounded-2xl overflow-hidden mt-18 md:mt-24 lg:mt-28">
      <div className="w-3/5">
        <Image src={shuttle} alt="Shuttle Image" />
      </div>
      <div className="w-2/5 p-12">
        <h3 className="text-6xl text-white font-bold">
          We Offer the best Shuttle services
          <span className="text-primary">.</span>
        </h3>
        <Link
          href={'/about#shuttle-services'}
          className="inline-flex hover:scale-105 transition-all duration-300">
          <Button
            variant={'primary'}
            className="flex items-center mt-6">
            Read More
            <Icon name="ArrowRight" />
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Shuttle;

import img from '@/public/about-icon.svg';
import small from '@/public/sm-svg.svg';
import Container from '../shared/container';
import Image from 'next/image';

function PageHeader({ title }: { title: string }) {
  return (
    <Container>
      <header className="bg-card-foreground rounded-2xl flex items-center md:gap-24 justify-between overflow-hidden">
        <div className="px-8 md:px-16">
          <h1 className="text-3xl md:text-5xl text-white capitalize font-semibold whitespace-nowrap">
            {title}
            <span className="text-primary">.</span>
          </h1>
        </div>

        <div className="relative">
          {/* Row 1 */}
          <div className="flex items-center gap-2.5 sm:gap-3 md:gap-6 -ml-5 sm:-ml-6.5 md:-ml-11 lg:-ml-[50px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <Image
                key={index}
                src={img}
                alt="decorative svg"
                className="w-8 sm:w-10 md:w-16 lg:w-20"
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-2.5 sm:gap-3 md:gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Image
                key={index}
                src={img}
                alt="decorative svg"
                className="w-8 sm:w-10 md:w-16 lg:w-20"
              />
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-2.5 sm:gap-3 md:gap-6 -ml-5 sm:-ml-6.5 md:-ml-11 lg:-ml-[50px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <Image
                key={index}
                src={img}
                alt="decorative svg"
                className="w-8 sm:w-10 md:w-16 lg:w-20"
              />
            ))}
          </div>

          {/* Mobile View */}
          <div className="hidden">
            <div className="absolute bottom-11.5 left-0 right-0 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={`top-${index}`}
                  src={small}
                  alt=""
                  className="w-8"
                />
              ))}
            </div>

            <div className="flex justify-center gap-1 py-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <Image
                  key={`middle-${index}`}
                  src={small}
                  alt=""
                  className="w-8"
                />
              ))}
            </div>

            <div className="absolute -bottom-7.5 left-0 right-0 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={`bottom-${index}`}
                  src={small}
                  alt=""
                  className="w-8"
                />
              ))}
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}

export default PageHeader;

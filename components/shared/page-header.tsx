import img from '@/public/about-icon.svg';
import Container from '../shared/container';
import Image from 'next/image';

function PageHeader({ title }: { title: string }) {
  return (
    <Container>
      <header className="bg-card-foreground rounded-2xl flex items-center justify-between ">
        <div className="px-16 ">
          <h1 className="text-5xl text-white capitalize font-semibold">
            {title}
            <span className="text-primary">.</span>
          </h1>
        </div>

        <div className="">
          {/* Row 1 */}
          <div className="flex items-center gap-6 -ml-[50px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <Image
                key={index}
                src={img}
                alt="decorative svg"
                className="w-20"
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-6 ">
            {Array.from({ length: 8 }).map((_, index) => (
              <Image
                key={index}
                src={img}
                alt="decorative svg"
                className="w-20"
              />
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-6 -ml-[50px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <Image
                key={index}
                src={img}
                alt="decorative svg"
                className="w-20"
              />
            ))}
          </div>
        </div>
      </header>
    </Container>
  );
}

export default PageHeader;

import React from 'react';
import Image from 'next/image';
import Container from '../shared/container';

const galleryImages = [
  '/tour/gallery/photo1.jpeg',
  '/tour/gallery/photo2.jpeg',
  '/tour/gallery/photo3.jpeg',
  '/tour/gallery/photo4.jpeg',
];

const galleryVideo = '/tour/gallery/vid1.mp4';

const GallerySection = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Trinidad & Tobago{' '}
            <span className="text-primary">Tourists in Ghana</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our memorable tour with guests from
            Trinidad and Tobago exploring the beauty of Ghana.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`Trinidad & Tobago Tourists in Ghana ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <video
            src={galleryVideo}
            controls
            className="rounded-xl shadow-lg w-full max-w-2xl max-h-[70vh]"
            poster={galleryImages[0]}>
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;

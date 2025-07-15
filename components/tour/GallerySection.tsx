import React from 'react';
import Container from '../shared/container';
import { Gallery } from '../gallery/gallery-grids';

const galleryImages = [
  '/tour/gallery/photo1.jpeg',
  '/tour/gallery/photo2.jpeg',
  '/tour/gallery/photo3.jpeg',
  '/tour/gallery/photo4.jpeg',
  '/tour/gallery/photo5.jpeg',
  '/tour/gallery/photo6.jpeg',
  '/tour/gallery/photo7.jpeg',
  '/tour/gallery/photo8.jpeg',
  '/tour/gallery/photo9.jpeg',
  '/tour/gallery/photo10.jpeg',
  '/tour/gallery/photo11.jpeg',
  '/tour/gallery/photo12.jpeg',
  '/tour/gallery/photo13.jpeg',
  '/tour/gallery/photo14.jpeg',
  '/tour/gallery/photo15.jpeg',
  '/tour/gallery/photo16.jpeg',
];

const GallerySection = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Our <span className="text-primary">Tour Gallery</span>
          </h2>
        </div>
        <Gallery
          images={galleryImages.map((src, idx) => ({
            src,
            alt: `Tour in Ghana Gallery Image ${idx + 1}`,
          }))}
          layout="grid"
          maxColumns={4}
          showCaptions={false}
          showCategories={false}
        />
      </Container>
    </section>
  );
};

export default GallerySection;

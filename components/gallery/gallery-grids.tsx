'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback, useEffect } from 'react';
import { Lightbox } from '@/components/gallery/lightbox';
import { GalleryImage } from '@/lib/types';

type LayoutType = 'masonry' | 'bento' | 'grid' | 'rows';

interface GalleryProps {
  images: GalleryImage[];
  layout?: LayoutType;
  gap?: number;
  maxColumns?: number;
  showCaptions?: boolean;
  showCategories?: boolean;
  enableLightbox?: boolean;
  enableFiltering?: boolean;
  className?: string;
}

export function Gallery({
  images,
  layout = 'bento',
  gap = 4,
  maxColumns = 6,
  showCaptions = true,
  showCategories = false,
  enableLightbox = true,
  enableFiltering = false,
  className = '',
}: GalleryProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const [filteredImages, setFilteredImages] =
    useState<GalleryImage[]>(images);

  // Get unique categories
  const categories = React.useMemo(() => {
    const cats = Array.from(
      new Set(images.map((img) => img.category).filter(Boolean))
    );
    return ['all', ...cats];
  }, [images]);

  // Filter images by category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(
        images.filter((img) => img.category === selectedCategory)
      );
    }
  }, [images, selectedCategory]);

  // Lightbox handlers
  const openLightbox = useCallback(
    (index: number) => {
      if (enableLightbox) {
        setLightboxIndex(index);
      }
    },
    [enableLightbox]
  );

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : prev
    );
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Layout-specific grid classes
  const getLayoutClasses = () => {
    switch (layout) {
      case 'masonry':
        return `columns-1 md:columns-2 lg:columns-3 xl:columns-${Math.min(
          maxColumns,
          4
        )} gap-${gap}`;
      case 'grid':
        return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${Math.min(
          maxColumns,
          4
        )} gap-${gap}`;
      case 'rows':
        return `grid grid-cols-1 gap-${gap}`;
      case 'bento':
      default:
        return `grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-6 gap-${gap} auto-rows-[minmax(500px,1fr)]`;
    }
  };

  // Get item-specific classes for bento layout
  const getBentoItemClasses = (index: number) => {
    if (layout !== 'bento') return '';

    const patterns = [
      'col-span-2 md:col-span-3 row-span-2', // Large
      'col-span-1 md:col-span-2 row-span-2', // Medium
      'col-span-1 row-span-2', // Tall
      'col-span-2 row-span-1', // Wide
      'col-span-1 md:col-span-2 row-span-2', // Medium
      'col-span-1 row-span-1', // Small
      'col-span-2 md:col-span-3 row-span-1', // Wide large
      'col-span-1 row-span-2', // Tall
    ];

    return patterns[index % patterns.length];
  };

  // Get masonry item classes
  const getMasonryItemClasses = () => {
    if (layout !== 'masonry') return '';
    return 'break-inside-avoid mb-4';
  };

  if (!images.length) {
    return (
      <div
        className={`flex items-center justify-center min-h-64 bg-gray-100 rounded-lg ${className}`}>
        <p className="text-gray-500 text-lg">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {/* Category Filter */}
      {enableFiltering && categories.length > 1 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category || 'all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}>
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className={getLayoutClasses()}>
        {filteredImages.map((img, index) => {
          const isClickable = enableLightbox;

          return (
            <div
              key={`${img.src}-${index}`}
              className={`
                  relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300
                  ${getBentoItemClasses(index)}
                  ${getMasonryItemClasses()}
                  ${layout === 'masonry' ? 'inline-block w-full' : ''}
                  ${layout === 'bento' ? 'h-full min-h-64' : ''}
                  ${
                    layout === 'rows'
                      ? 'aspect-[16/9]'
                      : layout === 'grid'
                      ? 'aspect-square'
                      : ''
                  }
                `}
              onClick={() => isClickable && openLightbox(index)}
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onKeyDown={(e) => {
                if (
                  isClickable &&
                  (e.key === 'Enter' || e.key === ' ')
                ) {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}>
              <img
                src={img.src}
                alt={img.alt || `Gallery image ${index + 1}`}
                className={`
                    object-cover transition-transform duration-300 group-hover:scale-105
                    ${
                      layout === 'masonry'
                        ? 'w-full h-auto'
                        : 'w-full h-full'
                    }
                  `}
                loading={index < 4 ? 'eager' : 'lazy'}
              />

              {/* Overlay */}
              {(showCaptions || showCategories) &&
                (img.caption || img.category) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      {showCategories && img.category && (
                        <span className="inline-block bg-blue-600 text-xs px-2 py-1 rounded-full mb-2">
                          {img.category}
                        </span>
                      )}
                      {showCaptions && img.caption && (
                        <p className="text-sm font-medium">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  </div>
                )}
            </div>
          );
        })}
      </div>

      {/* Empty state for filtered results */}
      {filteredImages.length === 0 && selectedCategory !== 'all' && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No images found in &quot;{selectedCategory}&quot; category
          </p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View All Images
          </button>
        </div>
      )}

      {/* Lightbox */}
      {enableLightbox && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex >= 0}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}

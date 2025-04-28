/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  apiVersion: 'v2025-03-05',
  dataset: 'production',
  projectId: '5wtce7f4',
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

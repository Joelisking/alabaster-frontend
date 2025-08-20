import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/al/page.php',
        has: [
          {
            type: 'query',
            key: 'type',
            value: 'aboutus',
          },
        ],
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

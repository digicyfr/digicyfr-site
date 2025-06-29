import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kwiaciarniamilosc.pl',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kebabsuperking.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.theoceanpro.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Remove deprecated experimental.turbo config
  // Turbopack is now stable and doesn't need experimental configuration
};

export default withNextIntl(nextConfig);
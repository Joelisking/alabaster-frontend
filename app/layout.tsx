import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';
import { client } from '@/lib/sanity';
import { CATEGORIES_QUERY } from '@/lib/queries';
import { CategoryOption } from '@/lib/types';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Alabaster Car Rentals & Tours',
  description:
    'We offer chauffer driven car rentals, corporate shuttle services and tours in Ghana. We operate a vast fleet of vehicles ranging from sedans, SUVs, mini-vans and buses. Our office is located at the Ghana Book Trust premises, 16 IPS Road, Accra (Digital Address: GA-546-4868). Your next road adventure begins with Alabaster Car Rentals - We are Swift, Safe & Reliable!',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await client.fetch<CategoryOption[]>(
    CATEGORIES_QUERY
  );

  return (
    <html lang="en" className={manrope.variable}>
      <body className={`antialiased`}>
        <Navbar />
        <div className="mt-24 md:mt-32 lg:mt-36 xl:mt-48 mb-18 md:mb-24 lg:mb-28 xl:mb-36">
          {children}
        </div>
        <Footer />
        <WhatsAppButton categories={categories} />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Alabaster Car Rentals & Tours',
  description:
    'We offer chauffer driven car rentals, corporate shuttle services and tours in Ghana. We operate a vast fleet of vehicles ranging from sedans, SUVs, mini-vans and buses. Our office is located at Granada Hotel, within the Accra Polo Court catchment area, Liberation Road, just about a five-minute drive from the Kotoka International Airport (KIA) in Accra. Your next road adventure begins with Alabaster Car Rentals - We are Swift, Safe & Reliable!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={`antialiased`}>
        <Navbar />
        <div className="mt-24 lg:mt-36 xl:mt-48">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

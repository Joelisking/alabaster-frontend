import React from 'react';
import Container from '../shared/container';
import Image from 'next/image';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import linkedin from '@/public/linkedin.svg';
import Link from 'next/link';
import { links } from './links';

function Footer() {
  return (
    <footer className="bg-card-foreground py-8">
      <Container className="p-5 md:p-20 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
        {/* First Section - Responsive width and spacing */}
        <div className="w-full md:w-2/5 space-y-8 md:space-y-0">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-medium uppercase text-sm text-white">
                menu
              </span>
            </div>

            <div className="flex flex-col space-y-2 mt-4 md:mt-6 text-[#D0D0C8] text-xl md:text-3xl">
              {links.map((link, index) => (
                <span key={index}>
                  <Link
                    href={link.href}
                    className="inline-flex cursor-pointer hover:text-white transition-all duration-300">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-16">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-medium uppercase text-sm text-white">
                location
              </span>
            </div>

            <div className="mt-4 md:mt-6 text-[#D0D0C8] space-y-1 md:space-y-3">
              <span className="block">
                Polo Court, Liberation Road, Accra
              </span>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl">10am—6pm</span>
                <span>/ Everyday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Responsive layout */}
        <div className="w-full md:w-3/5 border-t-8 border-primary flex flex-col md:flex-row pt-8 md:pt-16">
          <div className="w-full md:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-medium uppercase text-sm text-white">
                contact
              </span>
            </div>

            <div className="mt-3 flex flex-col text-sm text-[#D0D0C8]">
              <span>+233980 971-24-19</span>
              <span>hello@alabaster.com</span>
            </div>

            <div className="mt-8 md:mt-16 bg-secondary-foreground p-4 md:p-6 w-full lg:w-3/5 rounded-xl md:rounded-2xl">
              <div className="text-lg lg:text-3xl text-white">
                You can reach us on WhatsApp
              </div>

              <div className="mt-8 lg:mt-36 xl:mt-60 bg-secondary rounded-xl md:rounded-3xl inline-flex gap-3 py-2 px-4 md:py-2 md:px-6 cursor-pointer hover:scale-105 transition-all duration-300">
                <span className="text-sm lg:text-base whitespace-nowrap">
                  Send a message
                </span>
                <span className="w-3 h-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons - Responsive spacing */}
          <div className="mt-8 md:mt-0 w-full md:w-auto">
            <div className="flex items-center gap-3 justify-start md:justify-between">
              {[
                {
                  href: 'https://www.facebook.com/Alabastercarrentalsgh/',
                  icon: facebook,
                },
                {
                  href: 'https://www.instagram.com/alabastercarrentals/',
                  icon: instagram,
                },
                {
                  href: 'https://www.linkedin.com/company/alabaster-car-rentals-&-tours-ltd/?originalSubdomain=gh',
                  icon: linkedin,
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-1/4 md:w-full">
                  <Image
                    src={social.icon}
                    alt={`${social.icon} logo`}
                    className="w-full max-w-[40px] md:max-w-none"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

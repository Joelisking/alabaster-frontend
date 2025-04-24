'use client';

import { useRef, useState } from 'react';
import Logo from './Logo';
import Links from './Links';
import MobileMenu from './MobileMenu';
import Buttons from './Buttons';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl bg-white backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-md lg:rounded-full shadow-2xl">
      <div className="flex items-center justify-between px-8 py-3">
        <Logo />
        <Links />
        <Buttons setMenuOpen={setMenuOpen} />
      </div>
      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

export default Navbar;

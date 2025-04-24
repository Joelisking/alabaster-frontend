'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from './navItems';

const MobileNavItem: React.FC<NavItem> = ({ text, url }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100">
        {url ? (
          <Link href={url} className="text-black">
            {text}
          </Link>
        ) : (
          <span className="text-black">{text}</span>
        )}
      </div>
    </div>
  );
};

export default MobileNavItem;

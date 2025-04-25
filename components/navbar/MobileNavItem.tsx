'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from './navItems';

interface MobileNavItemProps extends NavItem {
  setMenuOpen: (open: boolean) => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  text,
  url,
  setMenuOpen,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (url) {
      // Close the menu when a link is clicked
      setMenuOpen(false);
    } else {
      // Toggle dropdown if it's not a direct link
      setOpen(!open);
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 rounded">
        {url ? (
          <Link href={url} className="text-black w-full block">
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

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavItem } from './navItems';
import { Icon } from '@/components/ui';

const DesktopNavItem: React.FC<NavItem> = ({ text, url }) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <div className="relative group">
      {/* Added padding to parent */}
      <Link
        href={url || '#'}
        className={`flex gap-1 items-center transition-transform hover:scale-105 active:scale-95 ${
          isActive ? 'border-b-2 border-black font-semibold' : ''
        }`}>
        <span className="text-black">{text}</span>
        {isActive && <Icon name="ChevronDown" className="w-4 h-4" />}
      </Link>
    </div>
  );
};
export default DesktopNavItem;

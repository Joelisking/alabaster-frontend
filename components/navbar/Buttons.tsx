'use client';

import { Dispatch, SetStateAction } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icon } from '../ui';

const Buttons = ({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className="flex items-center gap-4">
    <div className="hidden lg:block">
      <Button>
        <Link className="flex items-center gap-1" href={'/contact'}>
          Contact Us
          <Icon name="ArrowRight" />
        </Link>
      </Button>
    </div>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-black transition-all hover:scale-105 hover:text-black/70 active:scale-95 lg:hidden">
      <FiMenu />
    </button>
  </div>
);

export default Buttons;

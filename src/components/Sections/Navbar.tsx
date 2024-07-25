'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavbarMenuList } from '@/constants';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className='w-ful'>
        <ul className='justify-center flex flex-1 flex-row gap-6 py-2'>
          {NavbarMenuList.map((menu, index) => (
            <Link key={index} href={menu.slug}>
              <li
                className={clsx(
                  'px-2 py-1 text-gray-light font-medium md:text-lg ',
                  pathname == menu.slug
                    ? 'text-white underline underline-offset-[0.3em]'
                    : 'hover:text-white/75 transition-colors duration-500'
                )}
              >
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

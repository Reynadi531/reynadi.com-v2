import Link from 'next/link';
import * as React from 'react';

import { IconListJumbotron, NavbarMenuList } from '@/constants';

const Footer: React.FunctionComponent = () => {
  return (
    <>
      <div className='w-full border-t-[1px] border-gray-text-light flex flex-col'>
        <nav className='w-full my-4'>
          <ul className='flex flex-row justify-center gap-8'>
            {NavbarMenuList.map((menu, index) => (
              <Link key={index} href={menu.slug}>
                <li className='text-gray-text-light font-medium md:text-lg hover:text-white transition-colors duration-500'>
                  {menu.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className='w-full flex flex-col'>
          <div className='flex flex-row justify-center gap-2'>
            {IconListJumbotron.map((icon, index) => (
              <Link key={index} href={icon.href} target='_blank'>
                <icon.icon className='size-6 text-gray-text-light hover:text-whitetransition-colors duration-300 md:size-7' />
              </Link>
            ))}
          </div>
          <p className='text-center py-2 text-gray-text-light'>
            nice to meet you!
          </p>
        </div>
        <p className='text-center text-sm text-gray-text-light py-6 md:text-base'>
          @ Reynadi Andreas Priesley 2024
        </p>
      </div>
    </>
  );
};

export default Footer;

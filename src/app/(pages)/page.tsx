import { Metadata, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from '@/components/Sections';

import { IconListJumbotron } from '@/constants';

import pp from '~/public/images/pp.png';

export const metadata: Metadata = {
  title: 'Homepage | Reynadi',
};

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className='py-4'>
        <div className='w-full h-full flex flex-row gap-4'>
          <div className='flex flex-auto w-4/6 items-center md:w-4/6'>
            <div className='flex flex-col gap-4 justify-start'>
              <h1 className='font-bold text-[22px] md:text-4xl'>
                Hi, I'm Reynadi👋
              </h1>
              <div className='flex flex-row gap-1 md:gap-4 text-gray-light'>
                {IconListJumbotron.map((icon, index) => (
                  <Link key={index} href={icon.href} target='_blank'>
                    <icon.icon className='size-6 hover:text-white/75 transition-colors duration-300 md:size-7' />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-auto w-3/6 h-full md:w-2/6'>
            <Image
              src={pp}
              alt="Reynadi's Profile Picture"
              className='rounded-xl'
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>
      <section className='py-6 pb-12'>
        <p className='text-gray-text-light text-justify text-base leading-relaxed md:text-lg'>
          Hey there, I'm Rey! (That's Reynadi Andreas Priesley for the record).
          I'm a software engineer who wears many hats – building, automating,
          and making the cloud work its magic. In my free time, I also make
          magic on the web.
        </p>
      </section>
      <section className='pb-6 w-full flex flex-col gap-4'>
        <h2 className='font-bold text-lg'>Works</h2>
        <p className='text-gray-text-light md:text-lg'>
          My latest and featured work
        </p>
        <div></div>
      </section>
    </>
  );
};

export default Home;

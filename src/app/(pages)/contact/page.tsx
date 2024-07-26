import { NextPage } from 'next';
import Link from 'next/link';

import { Navbar } from '@/components/Sections';
import Footer from '@/components/Sections/Footer';

import { IconListJumbotron } from '@/constants';

const ContactPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className='py-4 flex flex-col gap-6 h-[75vh]'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-bold'>Contact</h1>
          <p className='text-base text-gray-text-light md:text-lg'>
            You can contact me throguh email or through my social media handle
          </p>
          <div className='flex flex-col gap-4 pt-4'>
            {IconListJumbotron.map((icon, index) => (
              <Link
                className='flex flex-row gap-2 items-center'
                key={index}
                href={icon.href}
                target='_blank'
              >
                <icon.icon className='size-8 hover:text-white/90 transition-colors duration-300' />
                <p className='text-gray-text-light text-lg'>{icon.handle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;

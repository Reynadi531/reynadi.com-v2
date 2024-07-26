import React from 'react';

import BlankCard from '@/components/Card/BlankCard';
import { Navbar } from '@/components/Sections';
import Footer from '@/components/Sections/Footer';

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <section className='py-4 flex flex-col gap-6 h-[75vh]'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-bold'>Latest of my work</h1>
          <p className='text-base text-gray-text-light md:text-lg'>
            The list of what I have been work on throughout the year
          </p>
        </div>
        <BlankCard message='Currently there is no blog posts:)' />
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;

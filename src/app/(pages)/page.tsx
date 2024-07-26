import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Metadata, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import BlankCard from '@/components/Card/BlankCard';
import WorkCard from '@/components/Card/WorkCard';
import { Navbar } from '@/components/Sections';
import Footer from '@/components/Sections/Footer';

import { IconListJumbotron } from '@/constants';

import { allWorks } from '~/.contentlayer/generated';

export const metadata: Metadata = {
  title: 'Homepage',
};

async function getWorkPost() {
  const sortedWork = allWorks
    .sort((a, b) => {
      if (new Date(a.startDate ?? 0) > new Date(b.startDate ?? 0)) {
        return -1;
      }
      return 1;
    })
    .filter((work) => work.featured)
    .map((work) => ({
      title: work.title,
      position: work.position,
      shortDescription: work.shortDescription,
      slug: work.slug,
      thumbnail: work.thumbnail,
      externalLink: work.externalLink,
    }));

  return sortedWork;
}

const Home: NextPage = async () => {
  const workList = await getWorkPost();
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
              <div className='flex flex-row gap-1 md:gap-4 text-gray-text-light'>
                {IconListJumbotron.map((icon, index) => (
                  <Link key={index} href={icon.href} target='_blank'>
                    <icon.icon className='size-6 hover:text-white/90 transition-colors duration-300 md:size-7' />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-auto w-3/6 h-full md:w-2/6'>
            <Image
              src='/pp.png'
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
        <div className='flex flex-col w-full h-auto gap-6'>
          {workList ? (
            workList.map((work, index) => (
              <WorkCard key={index} {...work} thumbnail={work.thumbnail} />
            ))
          ) : (
            <BlankCard message='Currently there is no works :)' />
          )}
        </div>
        <div className='flex items-center justify-center'>
          <Link href='/work'>
            <p className='text-gray-text-light hover:text-white transition-colors duration-500 text-center underline underline-offset-8 decoration-dashed'>
              see more
            </p>
          </Link>
        </div>
      </section>
      <section>
        <h2 className='font-bold text-lg'>Blogs</h2>
        <p className='text-gray-text-light md:text-lg'>
          I also write blog post about technology and study case
        </p>
        <div className='flex flex-col w-full h-auto gap-6 pt-4'>
          <BlankCard message='Currently there is no blog posts :)' />
        </div>
        <div className='flex items-center justify-center pt-4'>
          <Link href='/blog'>
            <p className='text-gray-text-light hover:text-white transition-colors duration-500 text-center underline underline-offset-8 decoration-dashed'>
              see more
            </p>
          </Link>
        </div>
      </section>
      <section>
        <div className='flex flex-col h-64 py-8 items-center justify-center gap-2'>
          <h1 className='text-2xl md:text-4xl font-bold'>
            Wanna work together?
          </h1>
          <Link
            href='/contact'
            className='flex flex-row items-center gap-1 underline underline-offset-8 decoration-dashed text-gray-text-light text-lg'
          >
            <p>contact me</p>
            <IconArrowNarrowRight className='size-5' />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

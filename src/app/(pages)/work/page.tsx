import { Metadata, NextPage } from 'next';

import BlankCard from '@/components/Card/BlankCard';
import WorkCard from '@/components/Card/WorkCard';
import { Navbar } from '@/components/Sections';
import Footer from '@/components/Sections/Footer';

import { allWorks } from '~/.contentlayer/generated';

export const metadata: Metadata = {
  title: 'Work',
};

async function getWorkPost() {
  const sortedWork = allWorks
    .sort((a, b) => {
      if (new Date(a.startDate ?? 0) > new Date(b.startDate ?? 0)) {
        return -1;
      }
      return 1;
    })
    .map((work) => ({
      title: work.title,
      position: work.position,
      shortDescription: work.shortDescription,
      slug: work.slug,
      thumbnail: work.thumbnail,
    }));

  return sortedWork;
}

const WorkPage: NextPage = async () => {
  const workList = await getWorkPost();
  return (
    <>
      <Navbar />
      <section className='py-4 flex flex-col gap-6 pb-12'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-bold'>Latest of my work</h1>
          <p className='text-base text-gray-text-light'>
            The list of what I have been work on throughout the year
          </p>
        </div>
        {workList ? (
          workList.map((work, index) => (
            <WorkCard key={index} {...work} thumbnail={work.thumbnail} />
          ))
        ) : (
          <BlankCard message='Currently there is no works :)' />
        )}
      </section>
      <Footer />
    </>
  );
};

export default WorkPage;

'use client';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { Navbar } from '@/components/Sections';

const NotFoundPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className='flex flex-auto h-[720px] justify-center items-center'>
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-2xl font-bold'>
            You have gone into wrong place!
          </h1>
          <button
            onClick={() => router.push('/')}
            className='w-2/5 py-2 rounded-lg font-bold bg-white text-black hover:opacity-75 transition-all duration-300'
          >
            Back Home!
          </button>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;

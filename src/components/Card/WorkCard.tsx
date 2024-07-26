import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

type IProps = {
  title: string;
  position: string;
  shortDescription: string;
  slug: string;
  thumbnail: string;
  externalLink?: string;
};

const WorkCard: React.FunctionComponent<IProps> = ({
  title,
  position,
  shortDescription,
  slug,
  thumbnail,
  externalLink,
}: IProps) => {
  return (
    <>
      <Link
        href={
          externalLink
            ? externalLink
            : slug.startsWith('/')
              ? `/work${slug}`
              : `/work/${slug}`
        }
      >
        <div className='flex flex-col h-auto border-[1px] border-gray-text-light rounded-2xl hover:opacity-80 transition-all duration-300'>
          <div className='relative flex flex-auto w-full h-3/4'>
            <Image
              className='rounded-t-2xl'
              src={thumbnail}
              alt={title + "'s Thumbnail"}
              width={1080}
              height={200}
            />
          </div>
          <div className='flex flex-auto flex-row w-full max-h-1/4 px-4 gap-1 py-4'>
            <div className='flex-1'>
              <h3 className='font-semibold text-base md:text-lg'>{title}</h3>
              <p className='foont-normal text-sm md:text-base'>{position}</p>
              <p className='mt-2 font-normal text-sm text-gray-text-light md:text-base'>
                {shortDescription}
              </p>
            </div>
            <div className='flex-2 h-full justify-end'>
              <IconArrowNarrowRight className='text-gray-text-light size-6 md:size-8' />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WorkCard;

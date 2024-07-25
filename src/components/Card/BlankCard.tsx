import * as React from 'react';

type IProps = {
  message: string;
};

const BlankCard: React.FunctionComponent<IProps> = ({ message }) => {
  return (
    <div className='flex flex-col h-32 border-[1px] border-gray-text-light rounded-2xl hover:opacity-80 transition-all duration-300 justify-center items-center'>
      <h1 className='text-base text-gray-text-light'>{message}</h1>
    </div>
  );
};

export default BlankCard;

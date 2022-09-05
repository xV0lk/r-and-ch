import { FC } from 'react';

const BaseLanding: FC = () => {
  return (
    <>
      <div className="flex h-full flex-col font-lato justify-center text-center align-middle px-12">
        <h1 className="text-4xl h-20 font-bold">This is a test app</h1>
        <div className="h-15" />
        <h2 className="text-xl">
          Where people can interact with a playlist in youtube
        </h2>
      </div>
    </>
  );
};

export default BaseLanding;

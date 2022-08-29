import { FC } from 'react';

const BaseLanding: FC = () => {
  return (
    <>
      <div className="flex flex-col font-lato justify-center text-center align-middle h-[94vh] bg-slate-900">
        <h1 className="text-5xl h-20 font-bold">This is a test app</h1>
        <div className="h-15" />
        <h2 className="text-xl">
          Where people can interact with a playlist in youtube
        </h2>
      </div>
      <div className="flex flex-col justify-center text-center align-middle h-[94vh] bg-gray-800">
        <h1 className="text-5xl h-20 font-bold">
          It is for rock and chicharrón
        </h1>
        <div className="h-15" />
        <h2 className="text-xl">But it's currently under construction.</h2>
      </div>
    </>
  );
};

export default BaseLanding;

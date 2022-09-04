import { FC } from 'react';

const BaseLanding: FC = () => {
  return (
    <>
      <div className="flex flex-col font-lato justify-center text-center align-middle h-[94vh] bg-slate-900 bg-patt-rock2">
        <h1 className="text-5xl h-20 font-bold">This is a test app</h1>
        <div className="h-15" />
        <h2 className="text-xl">
          Where people can interact with a playlist in youtube
        </h2>
      </div>
    </>
  );
};

export default BaseLanding;

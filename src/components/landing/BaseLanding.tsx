import { FC } from 'react';

const BaseLanding: FC = () => {
  return (
    <div className="h-full overflow-auto">
      <div className="mt-[calc(100%-10rem)] h-full marker:font-lato text-center align-middle px-12 mx-auto">
        <h1 className="text-4xl h-20 font-bold">This is a test app</h1>
        <div className="h-8" />
        <h2 className="text-xl">
          Where people can interact with a playlist in youtube
        </h2>
      </div>
    </div>
  );
};

export default BaseLanding;

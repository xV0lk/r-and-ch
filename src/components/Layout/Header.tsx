import { FC } from 'react';
import { SvgLogo } from '../SvgLogo';

const Header: FC = () => {
  return (
    <div className="h-full grid grid-cols-5 content-center">
      <div className="justify-self-center self-center inline-block rounded-full bg-yellow-600 font-bold">
        <span className="px-2 font-lobs text-2xl">
          <SvgLogo />
        </span>
      </div>
    </div>
  );
};

export default Header;

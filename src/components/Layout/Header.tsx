import { FC } from 'react';
import { SvgLogo } from '../SvgLogo';

const Header: FC = () => {
  return (
    <div className="translate-x-5 translate-y-5 inline-block rounded-full bg-yellow-600 font-bold">
      <span className="px-2 font-lobs text-2xl">
        <SvgLogo />
      </span>
    </div>
  );
};

export default Header;

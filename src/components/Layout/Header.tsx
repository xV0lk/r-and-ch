import { FC } from 'react';
import { LogoSimple } from '../../../public/logo-simple';

const Header: FC = () => {
  return (
    <div className="h-full grid grid-cols-5 auto-cols-max">
      {/* <div className="justify-self-center self-center inline-block rounded-full bg-orange-1 font-bold sm:justify-self-start sm:ml-4">
        <span className="px-2 font-lobs text-2xl">
          <SvgLogo />
        </span>
      </div> */}
      <div className="col-start-1 col-span-2 place-self-center inline-block sm:justify-self-start sm:ml-8">
        <LogoSimple height={65} />
      </div>
    </div>
  );
};

export default Header;

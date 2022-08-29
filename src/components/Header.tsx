import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="sticky top-0 h-[6vh] bg-yellow-600 flex items-center font-bold">
      <span className="inline-block align-middle px-8 font-lobs text-2xl">
        Rock &amp; Chicharrón
      </span>
    </div>
  );
};

export default Header;

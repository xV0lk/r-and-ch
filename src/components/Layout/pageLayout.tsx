import Header from './Header';
import { LeftMenu } from './leftMenu';

type Props = {
  children?: JSX.Element;
};
export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-900 bg-gradient-to-t from-slate-900 to-darkgrad-2">
      <div className="absolute top-0 left-0">
        <Header />
      </div>
      <div className="absolute top-0 left-0 h-[calc(100%-8rem)]">
        <div className="flex h-full">{children}</div>
      </div>
      <div className="absolute bottom-0 left-0 w-screen h-32 bg-none border border-white"></div>
    </div>
  );
};

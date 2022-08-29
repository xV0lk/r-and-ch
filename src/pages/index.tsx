import type { NextPage } from 'next';
import Header from '../components/Header';
import BaseLanding from '../components/landing/BaseLanding';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BaseLanding />
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center align-middle h-screen bg-slate-900">
        <h1 className="text-5xl h-20">This is a test app</h1>
        <div className="h-15" />
        <h2 className="text-xl">
          Where people can interact with a playlist in youtube
        </h2>
      </div>
      <div className="flex flex-col justify-center text-center align-middle h-screen bg-gray-800">
        <h1 className="text-5xl h-20">It is for rock and chicharrón</h1>
        <div className="h-15" />
        <h2 className="text-xl">But it's currently under construction.</h2>
      </div>
    </>
  );
};

export default Home;

import Head from 'next/head';
import NavBar from '@components/NavBar';
import { useInView } from 'react-intersection-observer';

const Home = () => {

  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <>
      <Head>
        <title>Gioele Pannetto</title>
      </Head>
      <NavBar show={inView}/>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col font-title">
          <span className="text-5xl">Hi!</span>
          <div className="text-4xl">
            <span className="">I&apos;m </span><span className="blinking-cursor text-secondary">Gioele Pannetto</span>
          </div>
          <span className="mt-1 font-subtitle uppercase text-xs self-center opacity-60">Fullstack developer</span>
        </div>
      </div>
      <div ref={ref} className="font-text">
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </>
  );
};

export default Home;

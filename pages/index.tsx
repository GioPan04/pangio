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
      <div className="h-screen bg-green-400 flex items-center justify-center">
        <div className="flex flex-col font-title">
          <span className="text-5xl">Hi!</span>
          <span className="text-3xl blinking-cursor">I&apos;m Gioele Pannetto</span>
        </div>
      </div>
      <div ref={ref} className="font-text">
        <div className="h-screen bg-red-400"></div>
        <div className="h-screen bg-blue-400"></div>
      </div>
    </>
  );
};

export default Home;

import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import NavBar from '@components/NavBar';
import HomeHero from '@components/HomeHero';

const Home = () => {

  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <>
      <Head>
        <title>Gioele Pannetto</title>
      </Head>
      <NavBar show={inView}/>
      <HomeHero />
      <div ref={ref} className="font-text">
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </>
  );
};

export default Home;

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
      <div className="h-screen w-screen bg-green-400">
        <h1>My website</h1>
      </div>
      <div ref={ref}>
        <div className="h-screen w-screen bg-red-400"></div>
        <div className="h-screen w-screen bg-blue-400"></div>
      </div>
    </>
  );
};

export default Home;

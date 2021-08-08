import React from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import NavBar from '@components/NavBar';
import HomeHero from '@components/HomeHero';
import ContactMeBar from '@components/ContactMeBar';
import WhoAmI from '@components/WhoAmI';
import year_diff from 'helpers/years_diff';
import { GetServerSideProps, NextPage } from 'next';
import Footer from '@components/Footer';
import Projects from '@components/Projects';

type HomeProps = {
  yearsOld: number;
};

const Home: NextPage<HomeProps> = ({ yearsOld }) => {

  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <>
      <Head>
        <title>Gioele Pannetto</title>
      </Head>
      <NavBar show={inView}/>
      <ContactMeBar />
      <HomeHero />
      <div ref={ref} className="font-text p-20">
        <WhoAmI yearsOld={yearsOld} />
        <Projects />
        <div className="h-screen"></div>
      </div>
      <Footer />
    </>
  );
};

const birthday = new Date(2004, 11, 30);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {

  const years = year_diff(new Date(), birthday);

  return {
    props: {
      yearsOld: years
    }
  };
}; 

export default Home;

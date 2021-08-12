import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/me.jpg';
import HomeSection from '@components/HomeSection';

type WhoAmIProps = {
  yearsOld: number;
};

const WhoAmI: React.FC<WhoAmIProps> = ({ yearsOld }) => {
  return (
    <HomeSection title="Who am I" id="whoami">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <p className="md:flex-1 xl:flex-initial">
          Hi! I&apos;m Gioele Pannetto, a {yearsOld} years old programming enthusiast boy.
          I have this passion since I was 3 years old, the year my father gifted me my first computer.
          When I was 7 I developed my first Visual Basic script. At the age of 10 I created my first website in HTML and CSS, and so on with other programming languages not only for the web.
          I also created some websites for relatives and friends, and with this I realized that in addition to the passion for the computers, I also have the passion for helping others.
          I hope to help you as well!

          {/* Ciao! Sono Gioele Pannetto un ragazzo di {yearsOld} anni appassionato di programmazione.
          Ne sono appassionato sin dall&apos;età di 4 anni, ovvero quando ricevetti il mio primo computer.
          All&apos;età di 7 anni creai il mio primo script in Visual Basic.
          A 10 anni creai il mio primo sito in HTML e dopo entrai nel mondo del CSS e così via per altri linguaggi di programmazione non solo per il web.
          Ho creato anche dei siti per parenti e amici, e con questo ho capito che, oltre alla passione per i computer, ho anche la passione di autare gli altri.
          Spero di aiutare anche te! Ti auguro una Buona Navigazione! */}
        </p>
        <div className="w-full md:flex-1 xl:flex-initial">
          <Image className="rounded" src={profilePic} alt="Gioele Pannetto"/>
        </div>
      </div>
    </HomeSection>
  );
};


export default WhoAmI;
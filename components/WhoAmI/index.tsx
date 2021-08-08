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
      <div className="flex flex-row items-center gap-10">
        <p>
          Ciao! Sono Gioele Pannetto un ragazzo di {yearsOld} anni appassionato di programmazione.
          Ne sono appassionato sin dall&apos;età di 4 anni, ovvero quando ricevetti il mio primo computer.
          All&apos;età di 7 anni creai il mio primo script in Visual Basic.
          A 10 anni creai il mio primo sito in HTML e dopo entrai nel mondo del CSS e così via per altri linguaggi di programmazione non solo per il web.
          Ho creato anche dei siti per parenti e amici, e con questo ho capito che, oltre alla passione per i computer, ho anche la passione di autare gli altri.
          Spero di aiutare anche te! Ti auguro una Buona Navigazione!
        </p>
        <div className="w-full">
          <Image src={profilePic} alt="Gioele Pannetto"/>
        </div>
      </div>
    </HomeSection>
  );
};


export default WhoAmI;
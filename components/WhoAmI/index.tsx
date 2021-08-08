import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/me.jpg';

type WhoAmIProps = {
  yearsOld: number;
};

const WhoAmI: React.FC<WhoAmIProps> = ({ yearsOld }) => {
  return (
    <article id="whoami" className="h-screen flex flex-row items-center gap-10">
      <p>
        Ciao! Sono Gioele Pannetto un ragazzo di {yearsOld} anni appassionato di programmazione.
        Sono appassionato da essa sin dall&apos;età di 4 anni, l&apos;età in cui ricevetti il mio primo computer.
        All&apos;età di 7 anni creai il mio primo script in Visual Basic, e da quel giorno sono sempre rimasto appassionato di programmazione.
        A 10 anni creai il mio primo sito in HTML e mezz&apos;anno dopo abbordai pure sul CSS e così via per altri linguaggi di programmazione non solo per il web.
        Ho creato anche dei siti per parenti e amici, e con questo ho capito che, oltre alla passione per i computer, ho anche la passione di autare gli altri.
        Spero di aiutare anche te! Ti auguro una Buona Navigazione! 
      </p>
      <div className="w-full">
        <Image src={profilePic} alt="Gioele Pannetto"/>
      </div>
    </article>
  );
};


export default WhoAmI;
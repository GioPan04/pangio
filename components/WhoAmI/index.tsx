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
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <p className="md:w-1/2">
          Hi! I&apos;m Gioele Pannetto, a {yearsOld} years old programming enthusiast boy.
          I have this passion since I was 3 years old, the year my father gifted me my first computer.
          When I was 7 I developed my first Visual Basic script. At the age of 10 I created my first website in HTML and CSS, and so on with other programming languages not only for the web.
          I also created some websites for relatives and friends, and with this I realized that in addition to the passion for the computers, I also have the passion for helping others.
          I hope to help you as well!
        </p>
        <div className="w-full md:w-1/2 xl:w-1/3">
          <Image className="rounded" src={profilePic} width={460} height={574} alt="Gioele Pannetto"/>
        </div>
      </div>
    </HomeSection>
  );
};


export default WhoAmI;
import React from 'react';

const HomeHero: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col font-title">
        <span className="text-5xl">Hi!</span>
        <div className="text-4xl">
          <span className="">I&apos;m </span><span className="blinking-cursor text-secondary">Gioele Pannetto</span>
        </div>
        <span className="mt-1 font-subtitle uppercase text-xs self-center opacity-60">Fullstack developer</span>
      </div>
    </div>
  );
};

export default HomeHero;
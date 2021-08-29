import React from 'react';
import { XyzTransition } from '@animxyz/react';
import { useInView } from 'react-intersection-observer';

type HomeSectionTypes = {
  title: string;
  id?: string;
  className?: string;
}

const HomeSection: React.FC<HomeSectionTypes> = ({title, id, className, children}) => {

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section ref={ref} id={id} className="flex flex-col gap-2 pt-14 min-h-screen-80">
      <span className="font-subtitle font-semibold text-center text-4xl mb-8">{title}</span>
      <XyzTransition appear xyz="fade down-5">
        {inView && <div className={className}>
          {children}
        </div>}
      </XyzTransition>
    </section>
  );
};

export default HomeSection;
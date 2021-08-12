import React from 'react';

type HomeSectionTypes = {
  title: string;
  id?: string;
  className?: string;
}

const HomeSection: React.FC<HomeSectionTypes> = ({title, id, className, children}) => {
  return (
    <section id={id} className="flex flex-col gap-2 pt-14 min-h-screen-80">
      <span className="font-subtitle font-semibold text-center text-4xl mb-8">{title}</span>
      <div className={className}>
        {children}
      </div>
    </section>
  );
};

export default HomeSection;
import React from 'react';

type HomeSectionTypes = {
  title: string;
  id?: string;
}

const HomeSection: React.FC<HomeSectionTypes> = ({title, id, children}) => {
  return (
    <section id={id} className="flex flex-col gap-2 pt-14">
      <span className="font-subtitle">{title}</span>
      <div>
        {children}
      </div>
    </section>
  );
};

export default HomeSection;
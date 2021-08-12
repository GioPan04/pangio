import HomeSection from '@components/HomeSection';
import Project from '@components/Project';
import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <HomeSection className="flex flex-col gap-28" title="My projects" id="projects">
      <Project name="Insegreto" imageUrl="/insegreto.png" tags={['frontend', 'backend']} link="https://insegreto.com">
        In 2020 I started to collaborate with the owners of the social network to give a new life to the website.
        We redisigned the whole site. <br />
        The website was born in 2009 and today has more than 200.000 registred users with over 5 milions posts sent.
      </Project>
    </HomeSection>
  );
};

export default ProjectsSection;
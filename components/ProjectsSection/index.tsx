import HomeSection from '@components/HomeSection';
import Project from '@components/Project';
import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <HomeSection title="My projects" id="projects">
      <Project />
      <Project />
      <Project />
      <Project />
    </HomeSection>
  );
};

export default ProjectsSection;
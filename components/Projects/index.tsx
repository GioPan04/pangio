import HomeSection from '@components/HomeSection';
import React from 'react';
import ProjectTile from './ProjectTile';

const Projects: React.FC = () => {
  return (
    <HomeSection title="Projects" id="projects">
      <div className="timeline grid grid-cols-3">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </HomeSection>
  );
};

export default Projects;
import React from 'react';

const ProjectTile: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-10 h-10 bg-white rounded-full"></div>
      <article className="ml-12 p-10 bg-white text-black">
        Test
      </article>
    </div>
  );
};

export default ProjectTile;
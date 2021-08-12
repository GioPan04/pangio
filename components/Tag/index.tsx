import React from 'react';

const Tag: React.FC = ({children}) => {
  return (
    <span className="bg-accent bg-opacity-70 px-3 py-1 rounded-full w-min text-sm">#{children}</span>
  );
};

export default Tag;
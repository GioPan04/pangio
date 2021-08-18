import NavBar from '@components/NavBar';
import React from 'react';

/**
 * A basic page with a NavBar included
 */
const BasicPage: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar show={true} />
      <main className="mt-12">
        { children }
      </main>
    </div>
  );
};

export default BasicPage;
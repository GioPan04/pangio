import React from 'react';

type NavBarTypes = {
  show?: boolean;
};

const NavBar: React.FC<NavBarTypes> = ({ show }) => {
  return (
    <nav className={'z-50 w-screen bg-black text-white p-2 fixed transition-all duration-150 ' + (show ? 'top-0' : '-top-10')}>
      <a href="#whoami">Who am I</a>
    </nav>
  );
};

export default NavBar;
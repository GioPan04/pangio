import React from 'react';

type NavBarTypes = {
  show?: boolean;
};

const NavBar: React.FC<NavBarTypes> = ({ show }) => {
  return (
    <nav className={'w-screen bg-black text-white p-2 fixed transition-all duration-150 ' + (show ? 'top-0' : '-top-10')}>
      NavBar
    </nav>
  );
};

export default NavBar;
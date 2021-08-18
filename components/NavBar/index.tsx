import React, { useState } from 'react';
import { Menu } from 'react-feather';
import ILink from 'types/ILink';

type NavBarTypes = {
  show?: boolean;
  links: ILink[];
};

const NavBar: React.FC<NavBarTypes> = ({ show, links }) => {

  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <nav className={'z-40 w-screen bg-accent bg-opacity-90 text-white p-2 fixed flex flex-row justify-center items-center transition-all duration-150 ' + (show ? 'top-0 ' : '-top-12 ') + (showMenu ? 'h-sc' : '')}>
      {/* <span className="text-2xl mx-2">{'{'}</span>
      <div className="flex flex-row items-center gap-2 mt-1">
        {links.map((l, i) => <a href={l.link} key={i}>{`"${l.name}"`}{i < links.length - 1 ? ',' : ''}</a>)}
      </div>
      <span className="text-2xl mx-2">{'}'}</span> */}
      <div className={'transition-opacity duration-300 ' + (showMenu ? 'opacity-0' : 'opacity-100')}>
        <Menu onClick={() => setShowMenu(v => !v)} />
      </div>
    </nav>
  );
};

export default NavBar;
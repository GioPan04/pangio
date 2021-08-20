import Socials from '@components/Socials';
import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import ILink from 'types/ILink';

type NavBarTypes = {
  show?: boolean;
  links: ILink[];
};

const NavBar: React.FC<NavBarTypes> = ({ show, links }) => {

  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <nav className={'z-40 w-screen bg-accent bg-opacity-90 text-white p-2 fixed flex flex-row justify-center items-center transition-all duration-150 ' + (show ? 'top-0 ' : '-top-12 ') + (showMenu ? 'h-sc bg-opacity-100' : '')}>
      {/* <span className="text-2xl mx-2">{'{'}</span>
      <div className="flex flex-row items-center gap-2 mt-1">
        {links.map((l, i) => <a href={l.link} key={i}>{`"${l.name}"`}{i < links.length - 1 ? ',' : ''}</a>)}
      </div>
      <span className="text-2xl mx-2">{'}'}</span> */}
      <div className={'transition-opacity duration-100 ' + (showMenu ? 'opacity-0' : 'opacity-100')}>
        <Menu onClick={() => setShowMenu(v => !v)} />
      </div>
      <div className={'relative w-full transition-all duration-500 py-3 ' + (showMenu ? 'h-screen opacity-100 visible' : 'h-10 opacity-0 invisible')}>
        <X onClick={() => setShowMenu(false)} className="absolute top-3 right-3 cursor-pointer" size={40} />
        <span className="text-2xl mt-2 mb-2 block font-title">Menu</span>

        <div className="mt-6">
          <span className="uppercase text-sm font-subtitle font-semibold mb-2 block text-opacity-90">Links</span>
          <div className="flex flex-col text-lg">
            <span>{'{'}</span>
            {links.map((l, i) => <a className="ml-5" href={l.link} key={i}>{`"${l.name}"`}{i < links.length - 1 ? ',' : ''}</a>)}
            <span>{'}'}</span>
          </div>
        </div>

        <div className="absolute bottom-6">
            <span className="uppercase text-sm font-subtitle font-semibold mb-2 block text-opacity-90">My socials</span>
            <div className="flex flex-row gap-4 mt-3"><Socials size={30} /></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
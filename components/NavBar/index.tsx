import React, { useEffect, useState } from 'react';
import { Menu as RFMenu } from 'react-feather';
import ILink from 'types/ILink';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Menu from '@components/Menu';

type NavBarTypes = {
  show?: boolean;
  links: ILink[];
};

const NavBar: React.FC<NavBarTypes> = ({ show, links }) => {

  const [ showMenu, setShowMenu ] = useState(false);

  useEffect(() => {
    if(showMenu) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [showMenu]);

  return (
    <nav className={'z-40 w-screen bg-accent bg-opacity-90 text-white sm:p-2 py-2 fixed transition-all duration-150 ' + (show ? 'top-0 ' : '-top-12 ') + (showMenu ? 'bg-opacity-100' : '')}>
      <div className="hidden sm:flex flex-row justify-center items-center">
        <span className="text-2xl mx-2">{'{'}</span>
        <div className="flex flex-row items-center gap-2 mt-1">
          {links.map((l, i) => <a href={l.link} key={i}>{`"${l.name}"`}{i < links.length - 1 ? ',' : ''}</a>)}
        </div>
        <span className="text-2xl mx-2">{'}'}</span>
      </div>


      <div className={'sm:hidden absolute transition-opacity duration-100 w-full px-2 flex flex-row justify-between ' + (showMenu ? 'opacity-0 ' : 'opacity-100 ')}>
        <span className="font-title text-xl -mt-0.5">Gioele Pannetto</span>
        <RFMenu onClick={() => setShowMenu(v => !v)} />
      </div>

      <Menu links={links} onClose={() => setShowMenu(false)} show={showMenu} />
    </nav>
  );
};

export default NavBar;
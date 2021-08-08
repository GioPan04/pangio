import React from 'react';

type NavBarTypes = {
  show?: boolean;
};

interface ILink {
  name: string;
  link: string;
}

const links: ILink[] = [
  {name: 'Home', link: '#'},
  {name: 'Who am I', link: '#whoami'},
  {name: 'Blog', link: '/blog'},
];

const NavBar: React.FC<NavBarTypes> = ({ show }) => {
  return (
    <nav className={'z-50 w-screen bg-accent bg-opacity-90 text-white p-2 fixed flex flex-row justify-center items-center transition-all duration-150 ' + (show ? 'top-0' : '-top-12')}>
      <span className="text-2xl mx-2">{'{'}</span>
      <div className="flex flex-row items-center gap-2 mt-1">
        {links.map((l, i) => <a href={l.link} key={i}>{`"${l.name}"`}{i < links.length - 1 ? ',' : ''}</a>)}
      </div>
      <span className="text-2xl mx-2">{'}'}</span>
    </nav>
  );
};

export default NavBar;
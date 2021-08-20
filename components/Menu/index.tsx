import Socials from '@components/Socials';
import React from 'react';
import { X } from 'react-feather';
import ILink from 'types/ILink';

type MenuProps = {
    links: ILink[];
    show: boolean;
    onClose: () => void;
};

const Menu: React.FC<MenuProps> = ({ links, show, onClose }) => {
    return (
        <div className={'relative w-full transition-all duration-500 p-3 ' + (show ? 'h-screen opacity-100 visible' : 'h-0 opacity-0 invisible sm:hidden')}>
        <X onClick={onClose} className="absolute top-3 right-3 cursor-pointer" size={40} />
        <span className="text-2xl mt-2 mb-2 block font-title">Menu</span>

        <div className="mt-6">
          <span className="uppercase text-sm font-subtitle font-semibold mb-2 block text-opacity-90">Links</span>
          <div className="flex flex-col text-lg">
            <span>{'{'}</span>
            {links.map((l, i) => <a className="ml-5" onClick={onClose} href={l.link} key={i}>{`"${l.name}"`}{i < links.length - 1 ? ',' : ''}</a>)}
            <span>{'}'}</span>
          </div>
        </div>

        <div className="mt-6">
            <span className="uppercase text-sm font-subtitle font-semibold mb-2 block text-opacity-90">My socials</span>
            <div className="flex flex-row gap-4 mt-3"><Socials size={30} /></div>
        </div>
      </div>
    );
};

export default Menu;
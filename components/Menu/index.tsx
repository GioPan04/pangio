import Socials from '@components/Socials';
import React from 'react';
import { X } from 'react-feather';
import ILink from 'types/ILink';

type MenuProps = {
    links: ILink[];
};

const Menu: React.FC<MenuProps> = ({ links }) => {
    return (
        <div className="fixed inset-0 bg-accent z-50">
            <div className="relative p-3 h-screen">
                <X className="absolute top-3 right-3 cursor-pointer" size={40} />
                <span className="text-2xl mt-2 mb-2 block font-title">Menu</span>
                <div className="flex flex-col text-lg">
                    <span>{'{'}</span>
                    {links.map((l, i) => <a className="ml-5" href={l.link} key={i}>{`"${l.name}"`}{i < links.length - 1 ? ',' : ''}</a>)}
                    <span>{'}'}</span>
                </div>

                <div className="absolute bottom-3">
                    <span className="uppercase text-sm font-subtitle font-semibold mb-2 block text-opacity-90">My socials</span>
                    <div className="flex flex-row gap-2"><Socials size={30} /></div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
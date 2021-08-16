import Socials from '@components/Socials';
import React from 'react';
import ILink from 'types/ILink';

type MenuProps = {
    links: ILink[];
};

const Menu: React.FC<MenuProps> = ({ links }) => {
    return (
        <div className="fixed inset-0 bg-accent z-50">
            <div className="flex flex-col">
                <span>{'{'}</span>
                {links.map((l, i) => <a href={l.link} key={i}>{`"${l.name}"`}{i < links.length - 1 ? ',' : ''}</a>)}
                <span>{'}'}</span>
            </div>

            <div>
                You can find me here:
                <div className="flex flex-row gap-2"><Socials size={24} /></div>
            </div>
        </div>
    );
};

export default Menu;
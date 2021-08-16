import React from 'react';
import { Codepen, GitHub, Instagram, Mail, Twitter } from 'react-feather';

type SocialsProps = {
    size?: number;
};

const Socials: React.FC<SocialsProps> = ({ size }) => {
    const iconClasses = 'md:opacity-50 hover:opacity-100 transition-opacity duration-300';

    return (
        <>
            <a href="https://github.com/GioPan04"><GitHub size={size} className={iconClasses} /></a>
            <a href="mailto:gioele@pannetto.com"><Mail size={size} className={iconClasses} /></a>
            <a href="https://codepen.io/giopan"><Codepen size={size} className={iconClasses} /></a>
            <a href="https://twitter.com/giopan_sh"><Twitter size={size} className={iconClasses} /></a>
            <a href="https://instagram.com/giopan.sh"><Instagram size={size} className={iconClasses} /></a>
        </>
    );
};

export default Socials;
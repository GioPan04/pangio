import React from 'react';
import { Codepen, GitHub, Instagram, Mail, Twitter } from 'react-feather';
 

const ContactMeBar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col fixed bottom-5 left-5 gap-3 vertical-separator">
      <a href="https://github.com/GioPan04"><GitHub className="icon-hover-white" /></a>
      <a href="mailto:gioele@pannetto.com"><Mail className="icon-hover-white" /></a>
      <a href="https://codepen.io/giopan"><Codepen className="icon-hover-white" /></a>
      <a href="https://twitter.com/giopan_sh"><Twitter className="icon-hover-white" /></a>
      <a href="https://instagram.com/giopan.sh"><Instagram className="icon-hover-white" /></a>
    </div>
  );
};

export default ContactMeBar;
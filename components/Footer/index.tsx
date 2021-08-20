import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center text-xs opacity-50 mt-5 pb-2">
      <span>
        Designed & Developed by Gioele Pannetto
      </span>
      <span>
        <a href="https://github.com/GioPan04/pangio">
          Check out the source code!
        </a>
      </span>
    </footer>
  );
};

export default Footer;
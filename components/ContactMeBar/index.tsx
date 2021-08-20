import Socials from '@components/Socials';
import React from 'react';
 

const ContactMeBar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col fixed bottom-5 left-5 gap-3 vertical-separator">
      <Socials />
    </div>
  );
};

export default ContactMeBar;
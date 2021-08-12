import React from 'react';
import Image from 'next/image';
import Tag from '@components/Tag';
import { ExternalLink } from 'react-feather';

type ProjectProps = {
  name: string;
  imageUrl: string;
  tags?: string[];
  link?: string;
}

const Project: React.FC<ProjectProps> = ({ name, imageUrl, tags, link, children }) => {
  return (
    <article className="flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse group">
      <div className="flex flex-col lg:group-even:items-end w-full lg:w-2/3">
        <span className="text-secondary font-title text-3xl font-bold mb-2">{name}</span>
        {children && <p className="mb-2 lg:w-2/3 lg:group-even:text-right">{children}</p>}
        <div className="flex flex-row gap-1">
          {tags && tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <button className="mt-3 w-max bg-transparent transition-all duration-200 hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex flex-row gap-2 justify-center">
              <span>Check out</span> 
              <ExternalLink size={20} />
            </button>
          </a>
        )}
      </div>
      <div className="w-full lg:w-1/3">
        <div className="w-full aspect-w-16 aspect-h-9">
          <Image className="w-full h-full" src={imageUrl} alt={name} layout="fill" objectFit="cover" />
        </div>
      </div>
    </article>
  );
};

export default Project;
import BasicPage from '@components/BasicPage';
import { NextPage } from 'next';
import React from 'react';

const BlogPage: NextPage = () => {
  
  return (
    <BasicPage>
      <div className="w-full flex justify-center">
        <span className="font-bold font-title text-secondary text-4xl">How to do thing right becouse yes</span>
      </div>
    </BasicPage>
  );
};

export default BlogPage;
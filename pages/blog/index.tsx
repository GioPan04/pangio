import octokit, { IPost } from '../../blog/octokit';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

type BlogPageProps = {
  posts: IPost[];
};

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <>
      {posts.map((p, i) => <span key={i}>{p.title}</span>)}
    </>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
  const { data } = await octokit.rest.issues.listForRepo({
    owner: 'GioPan04',
    repo: 'pangio-blog',
    labels: 'article'
  });

  return {
    props: {
      posts: data
    }
  };
};
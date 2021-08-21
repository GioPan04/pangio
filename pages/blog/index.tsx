import octokit, { IPost } from '../../blog/octokit';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import PostTile from '@components/PostTile';

type BlogPageProps = {
  posts: IPost[];
};

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <>
      {posts.map((p, i) => <PostTile data={p} key={i} />)}
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
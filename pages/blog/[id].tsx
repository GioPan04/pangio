import BasicPage from '@components/BasicPage';
import octokit, { IPost } from 'blog/octokit';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import DefaultErrorPage from 'next/error';
import marked from 'marked';

type BlogPageProps = {
  post?: IPost;
};

const BlogPage: NextPage<BlogPageProps> = ({ post }) => {

  if(!post) return <DefaultErrorPage statusCode={404} />;

  const rawMarked = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const raw = marked(post.body!, {sanitize: true});
    
    return {
      __html: raw
    };
  };
  
  return (
    <BasicPage>
      <div className="w-full flex justify-center">
        <span className="font-bold font-title text-secondary text-4xl">{post.title}</span>
      </div>
        <div dangerouslySetInnerHTML={rawMarked()}></div>
    </BasicPage>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({ query: { id } }) => {

  const data = (await octokit.rest.issues.get({
    owner: 'GioPan04',
    repo: 'pangio-blog',
    issue_number: parseInt(id as string)
  })).data;

  return {
    props: {
      post: data
    },
  };
};
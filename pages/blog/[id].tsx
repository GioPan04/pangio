/* eslint-disable react/display-name */
import BasicPage from '@components/BasicPage';
import octokit, { IPost } from 'blog/octokit';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import DefaultErrorPage from 'next/error';
import ReactMarkdown from 'react-markdown';
import RemarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type BlogPageProps = {
  post?: IPost;
};

const BlogPage: NextPage<BlogPageProps> = ({ post }) => {

  if(!post) return <DefaultErrorPage statusCode={404} />;
  
  return (
    <BasicPage>
      <div className="w-full flex justify-center">
        <span className="font-bold font-title text-secondary text-6xl">{post.title}</span>
      </div>
        <ReactMarkdown
          className="container mx-auto"
          remarkPlugins={[RemarkGfm]}
          components={{
            a: props => <a className="text-blue-300 hover:underline" {...props} />,
            h1: props => <h1 className="font-title text-6xl" {...props} />,
            h2: props => <h2 className="font-title text-5xl" {...props} />,
            h3: props => <h3 className="font-title text-4xl" {...props} />,
            h4: props => <h4 className="font-title text-3xl" {...props} />,
            h5: props => <h5 className="font-title text-2xl" {...props} />,
            h6: props => <h6 className="font-title text-1xl" {...props} />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            code: ({node, children, className, ref, ...props}) => {
              const match = /language-(\w+)/.exec(className || '');

              return (
                <SyntaxHighlighter style={atomDark} language={match?.[1] || ''} {...props}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            }
          }}>
            {post.body || ''}
        </ReactMarkdown>
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
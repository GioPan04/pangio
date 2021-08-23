import { IPost } from 'blog/octokit';
import { PreviewRenderer } from 'common/PreviewRenderer';
import marked from 'marked';
import React from 'react';

type PostTileProps = {
  data: IPost;
};

const PostTile: React.FC<PostTileProps> = ({ data }) => {
  return (
    <article>
      <h3 className="font-title text-2xl">{data.title}</h3>
      <span className="text-sm">{data.created_at} {data.comments} comments</span>
      {data.body && <p>{marked(data.body, {renderer: new PreviewRenderer()})}</p>}
    </article>
  );
};

export default PostTile;
import React from 'react';
import { IPost } from 'blog/octokit';
import { PreviewRenderer } from 'common/PreviewRenderer';
import { formatDistance } from 'date-fns';
import marked from 'marked';
import Link from 'next/link';

type PostTileProps = {
  data: IPost;
};

const PostTile: React.FC<PostTileProps> = ({ data }) => {

  const date = formatDistance(new Date(data.created_at), new Date(), {addSuffix: true});

  return (
    <Link href={'/blog/' + data.number} passHref>
      <article>
        <h3 className="font-title text-2xl">{data.title}</h3>
        <span className="text-sm">{date} {data.comments} comments</span>
        {data.body && <p>{marked(data.body, {renderer: new PreviewRenderer()})}</p>}
      </article>
    </Link>
  );
};

export default PostTile;
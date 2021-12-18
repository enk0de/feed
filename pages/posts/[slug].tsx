import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import React, { ReactElement } from 'react';
import PostStyleWrapper from '../../components/Common/PostStyleWrapper';
import { TypoHeadingH1 } from '../../components/Common/Typography';
import PostLayout from '../../components/Layout/PostLayout';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import PostType from '../../types/post';

interface IPostPageProps {
  title: string;
  content: MDXRemoteSerializeResult;
}

const PostPage = ({ title, content }: IPostPageProps) => {
  return (
    <>
      <TypoHeadingH1
        css={{
          textAlign: 'center',
          fontSize: 28,
          lineHeight: '38px',
          marginBottom: '40px',
          '@bp2': {
            fontSize: 40,
            lineHeight: '54px'
          }
        }}
      >
        {title}
      </TypoHeadingH1>
      <PostStyleWrapper>
        <MDXRemote {...content} />
      </PostStyleWrapper>
    </>
  );
};

PostPage.getLayout = function (page: ReactElement) {
  return <PostLayout>{page}</PostLayout>;
};

type GetStaticPropsParams = ParsedUrlQuery & Pick<PostType, 'slug'>;

export const getStaticProps: GetStaticProps<IPostPageProps, GetStaticPropsParams> =
  async ({ params }) => {
    const post = getPostBySlug(params!.slug, ['title', 'content']);
    const mdxSource = await serialize(post.content);

    return {
      props: { title: post.title, content: mdxSource }
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug', 'date']);

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post }
      };
    }),
    fallback: false
  };
};

export default PostPage;

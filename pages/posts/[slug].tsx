import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import { ReactElement } from 'react';
import {
  TypoHeadingH1,
  TypoHeadingH3BaseStyleObj,
  TypoHeadingH4BaseStyleObj,
  TypoHeadingH5BaseStyleObj,
  TypoHeadingH6BaseStyleObj
} from '../../components/Common/Typography';
import PostLayout from '../../components/Layout/PostLayout';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { styled } from '../../stitches.config';
import PostType from '../../types/post';

interface IPostPageProps {
  title: string;
  content: MDXRemoteSerializeResult;
}

const PostStyleWrapper = styled('div', {
  h1: TypoHeadingH3BaseStyleObj,
  h2: TypoHeadingH4BaseStyleObj,
  h3: TypoHeadingH5BaseStyleObj,
  h4: TypoHeadingH6BaseStyleObj
});

const PostPage = ({ title, content }: IPostPageProps) => {
  return (
    <>
      <TypoHeadingH1
        css={{
          textAlign: 'center',
          fontSize: 28,
          lineHeight: '38px',
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

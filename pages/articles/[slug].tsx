import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import React, { ReactElement } from 'react';
import ArticleStyleWrapper from '../../components/Common/ArticleStyleWrapper';
import { TypoHeadingH1 } from '../../components/Common/Typography';
import ArticleLayout from '../../components/Layout/ArticleLayout';
import { getAllArticles, getArticleBySlug } from '../../lib/api';
import ArticleType from '../../types/articles';

interface IArticlePageProps {
  title: string;
  content: MDXRemoteSerializeResult;
}

const ArticlePage = ({ title, content }: IArticlePageProps) => {
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

      <ArticleStyleWrapper>
        <MDXRemote {...content} />
      </ArticleStyleWrapper>
    </>
  );
};

ArticlePage.getLayout = function (page: ReactElement) {
  return <ArticleLayout>{page}</ArticleLayout>;
};

type GetStaticPropsParams = ParsedUrlQuery & Pick<ArticleType, 'slug'>;

export const getStaticProps: GetStaticProps<IArticlePageProps, GetStaticPropsParams> =
  async ({ params }) => {
    const article = getArticleBySlug(params!.slug, ['title', 'content']);
    const mdxSource = await serialize(article.content);

    return {
      props: { title: article.title, content: mdxSource }
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles(['slug', 'date']);

  return {
    paths: articles.map((article) => {
      return {
        params: { ...article }
      };
    }),
    fallback: false
  };
};

export default ArticlePage;

import { format, parse } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import React, { ReactElement } from 'react';
import ArticleHeader from '../../components/Article/ArticleHeader';
import ArticleStyleWrapper from '../../components/Common/ArticleStyleWrapper';
import { TypoHeadingH1 } from '../../components/Common/Typography';
import ArticleLayout from '../../components/Layout/ArticleLayout';
import { getAllArticles, getArticleBySlug } from '../../lib/api';
import ArticleType from '../../types/articles';

interface IArticlePageProps {
  title: string;
  category: string;
  date: string;
  content: MDXRemoteSerializeResult;
}

const ArticlePage = ({ content, ...rest }: IArticlePageProps) => {
  return (
    <>
      <ArticleHeader {...rest} />
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
    const article = getArticleBySlug(params!.slug, [
      'title',
      'category',
      'date',
      'content'
    ]);
    const mdxSource = await serialize(article.content);

    return {
      props: {
        title: article.title,
        category: article.category,
        date: format(
          parse(article.date, 'yyyy-MM-dd hh:mm:ss', new Date()),
          'yyyy년 M월 d일'
        ),
        content: mdxSource
      }
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

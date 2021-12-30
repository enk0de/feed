import { format, parse } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import React, { ReactElement } from 'react';
import ArticleComments from '../../components/Article/ArticleComments';
import ArticleHeader from '../../components/Article/ArticleHeader';
import ArticleStyleWrapper from '../../components/Common/ArticleStyleWrapper';
import ArticleLayout from '../../components/Layout/ArticleLayout';
import {
  articlesDirectory,
  getAllArticles,
  getArticleByAbsolutePath
} from '../../lib/api';

interface IArticlePageProps {
  title: string;
  category: string;
  date: string;
  content: MDXRemoteSerializeResult;
}

const ArticlePage = ({ content, ...rest }: IArticlePageProps) => {
  return (
    <>
      <Head>
        <title>{`${rest.title} - hoondevfeed`}</title>
      </Head>
      <ArticleHeader {...rest} />
      <ArticleStyleWrapper>
        <MDXRemote {...content} />
      </ArticleStyleWrapper>
      <ArticleComments />
    </>
  );
};

ArticlePage.getLayout = function (page: ReactElement) {
  return <ArticleLayout>{page}</ArticleLayout>;
};

type GetStaticPropsParams = ParsedUrlQuery & { categoryAndSlug: string[] };

export const getStaticProps: GetStaticProps<IArticlePageProps, GetStaticPropsParams> =
  async ({ params }) => {
    console.log(params);
    const [category, slug] = params!.categoryAndSlug;
    const path = join(articlesDirectory, category, `${slug}.mdx`);

    const article = getArticleByAbsolutePath(path, [
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
          parse(article.date, 'yyyy-MM-dd HH:mm:ss', new Date()),
          'yyyy년 M월 d일'
        ),
        content: mdxSource
      }
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles(['category', 'slug', 'date']);

  return {
    paths: articles.map((article) => {
      return {
        params: { categoryAndSlug: [article.category, article.slug] }
      };
    }),
    fallback: false
  };
};

export default ArticlePage;

import { format, parse } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import React, { ReactElement } from 'react';
import ArticleComments from '../../components/Article/ArticleComments';
import ArticleHeader from '../../components/Article/ArticleHeader';
import ArticleStyleWrapper from '../../components/Common/ArticleStyleWrapper';
import ArticleLayout from '../../components/Layout/ArticleLayout';
import IArticle from '../../interfaces/articles';
import {
  articlesDirectory,
  getArticleByAbsolutePath,
  getArticles
} from '../../lib/api';
import { MDXComponents } from '../../lib/mdxComponents';
import { getOpenGraphImage } from '../../lib/openGraphImage';
import imageMetadata from '../../lib/rehypeImageMetadata';
import SEO from '../../next-seo.config';

interface IArticlePageProps extends IArticle {
  content: MDXRemoteSerializeResult;
  openGraphImage: string | null;
}

const ArticlePage = ({ content, openGraphImage, ...rest }: IArticlePageProps) => {
  return (
    <>
      <NextSeo
        {...SEO}
        title={rest.title}
        description={rest.description === '' ? rest.title : rest.description}
        openGraph={{
          ...SEO.openGraph,
          title: rest.title,
          description: rest.description === '' ? rest.title : rest.description,
          images: openGraphImage
            ? [
                {
                  url: openGraphImage
                }
              ]
            : undefined
        }}
      />
      <ArticleHeader {...rest} />
      <ArticleStyleWrapper>
        <MDXRemote {...content} components={MDXComponents} />
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
    const [category, slug] = params!.categoryAndSlug;
    const path = join(articlesDirectory, category, `${slug}.mdx`);

    const article = getArticleByAbsolutePath(path, [
      'title',
      'category',
      'date',
      'content',
      'description'
    ]);
    const mdxSource = await serialize(article.content, {
      mdxOptions: {
        rehypePlugins: [imageMetadata]
      }
    });

    const openGraphImage =
      (await getOpenGraphImage(`/og?title=${article.title}`)) ?? null;

    return {
      props: {
        title: article.title,
        category: article.category,
        date: format(
          parse(article.date, 'yyyy-MM-dd HH:mm:ss', new Date()),
          'yyyy년 M월 d일'
        ),
        description: article?.description || '',
        content: mdxSource,
        openGraphImage
      }
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getArticles(['category', 'slug', 'date']);

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

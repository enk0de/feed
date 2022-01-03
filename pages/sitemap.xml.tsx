import { GetServerSideProps } from 'next';
import { BASE_URL } from '../constants/common';
import { getArticles } from '../lib/api';
import getStaticSitemap from '../lib/getStaticSitemap';
import { getXMLFormatSitemap, withXMLTemplate } from '../utils/sitemapUtils';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const articles = getArticles(['category', 'slug']);

  const staticPaths = getStaticSitemap();
  const dynamicPaths = articles.map((article) => {
    return `${BASE_URL}/${article.category}/${article.slug}`;
  });

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = withXMLTemplate(
    allPaths
      .map((url) =>
        getXMLFormatSitemap({
          loc: url,
          lastmod: new Date().toISOString(),
          changefreq: 'daily',
          priority: '1.0'
        })
      )
      .join('')
  );

  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
};

export default Sitemap;

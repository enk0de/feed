import { BASE_URL } from './../constants/common';
import { globbySync } from 'globby';
import { join } from 'path';

export const pagesDirectory = join(process.cwd(), 'pages');

export default function getStaticSitemap() {
  const includedFiles = ['**/*.tsx', '*.tsx'].map((i) => `${pagesDirectory}/${i}`);
  const excludedFiles = [
    '_app.tsx',
    '_document.tsx',
    '_error.tsx',
    '404.tsx',
    'api/*',
    'articles/*',
    'sitemap.xml.tsx'
  ].map((i) => `!${pagesDirectory}/${i}`);

  const staticPages = globbySync([...includedFiles, ...excludedFiles]);

  const urls = staticPages.map((path) => {
    const slug = path
      .replace(pagesDirectory, '')
      .replace('.tsx', '')
      .replace(/\/index/g, '');
    return `${BASE_URL}/${slug}`;
  });

  return urls;
}

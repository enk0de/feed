import { MDXRemoteProps } from 'next-mdx-remote';
import ArticleCodeBlock from '../components/Article/ArticleCodeBlock';
import MDXResponsiveImage from '../components/Common/MDXResponsiveImage';

export const MDXComponents: MDXRemoteProps['components'] = {
  code: ArticleCodeBlock,
  // @ts-ignore
  img: MDXResponsiveImage
};

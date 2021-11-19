import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';

const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
    </>
  );
};

export default Index;

import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      {/*{heroPost && (*/}
      {/*    <div>*/}
      {/*      {heroPost.title}*/}
      {/*      {heroPost.coverImage}*/}
      {/*      {heroPost.date}*/}
      {/*      {heroPost.author}*/}
      {/*      {heroPost.slug}*/}
      {/*      {heroPost.excerpt}*/}
      {/*    </div>*/}
      {/*)}*/}
      {/*{morePosts}*/}
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
};

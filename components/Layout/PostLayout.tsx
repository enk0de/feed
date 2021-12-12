import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import { TypoHeadingH1 } from '../Common/Typography';
import Footer from './Footer';
import Header from './Header';

interface IPostMetadata {
  title: string;
}

interface IPostLayoutProps {
  children?: ReactNode;
}

export default function PostLayout({ children }: IPostLayoutProps) {
  return (
    <>
      <Header />
      <PostLayoutContentsWrapper>
        <Contents>
          {/* <TypoHeadingH1
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
            {metadata?.title}
          </TypoHeadingH1> */}
          {children}
        </Contents>
      </PostLayoutContentsWrapper>
      <Footer />
    </>
  );
}

const PostLayoutContentsWrapper = styled('main', {
  marginTop: 64,
  '@bp2': {
    marginTop: 80
  }
});

const Contents = styled('div', {
  maxWidth: 1140,
  width: '100%',
  padding: '30px 40px',
  margin: '0 auto',
  boxSizing: 'border-box'
});

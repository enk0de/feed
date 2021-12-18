import { ReactNode } from 'react';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../../constants/paddings';
import { styled } from '../../stitches.config';
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
      <PostLayoutContentsWrapper>{children}</PostLayoutContentsWrapper>
      <Footer />
    </>
  );
}

const PostLayoutContentsWrapper = styled('main', {
  maxWidth: 1140,
  width: '100%',
  padding: `30px ${FRAME_PADDING_MOBILE}px`,
  margin: '0 auto',
  marginTop: 64,
  boxSizing: 'border-box',
  '@bp2': {
    padding: `30px ${FRAME_PADDING_DEFAULT}px`,
    marginTop: 80
  }
});

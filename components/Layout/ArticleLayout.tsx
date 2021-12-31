import { ReactNode } from 'react';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../../constants/paddings';
import { styled } from '../../stitches.config';
import Footer from './Footer';
import Header from './Header';

interface IArticleLayoutProps {
  children?: ReactNode;
}

export default function ArticleLayout({ children }: IArticleLayoutProps) {
  return (
    <>
      <Header />
      <ArticleLayoutContentsWrapper>{children}</ArticleLayoutContentsWrapper>
      <Footer />
    </>
  );
}

const ArticleLayoutContentsWrapper = styled('main', {
  maxWidth: 700 + FRAME_PADDING_DEFAULT,
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

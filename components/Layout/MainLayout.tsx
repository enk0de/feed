import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import Footer from './Footer';
import Header from './Header';

interface IMainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Header />
      <MainLayoutContentsWrapper>{children}</MainLayoutContentsWrapper>
      <Footer />
    </>
  );
}

const MainLayoutContentsWrapper = styled('main', {
  marginTop: 64,
  '@bp2': {
    marginTop: 80
  }
});

const Contents = styled('div', {
  maxWidth: 1140,
  width: '100%',
  padding: '12px 40px',
  margin: '0 auto',
  boxSizing: 'border-box'
});

MainLayout.Contents = Contents;

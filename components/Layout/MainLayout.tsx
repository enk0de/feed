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
  marginTop: 80
});

const Contents = styled('div', {
  maxWidth: 1000,
  width: '100%',
  margin: '0 auto'
});

MainLayout.Contents = Contents;

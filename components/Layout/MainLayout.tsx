import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import Header from './Header';

interface IMainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Header />
      <ContentsArea>{children}</ContentsArea>
    </>
  );
}

const ContentsArea = styled('main', {
  maxWidth: 1000,
  width: '100%',
  margin: '0 auto',
  marginTop: 80
});

import { styled } from '../../stitches.config';
import Header from './Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <ContentsArea></ContentsArea>
    </>
  );
}

const ContentsArea = styled('main', {
  maxWidth: 1000,
  width: '100%',
  margin: '0 auto',
  marginTop: 80
});

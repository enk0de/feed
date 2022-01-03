import Image from 'next/image';
import { useRouter } from 'next/router';
import { TypoHeadingH1 } from '../components/Common/Typography';
import { css, styled } from '../stitches.config';

export default function Og() {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const title = searchParams.get('title');

  return (
    <Container>
      <TypoHeadingH1
        css={{ fontSize: 70, lineHeight: 1.3, marginBottom: 60, padding: '0 100px' }}
      >
        {title}
      </TypoHeadingH1>
      <Image src="/assets/logo.svg" priority={true} width={152} height={27} alt="" />
    </Container>
  );
}
const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  overflowWrap: 'anywhere',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
});

import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import { TypoLabel } from '../Common/Typography';

export default function Footer() {
  return (
    <FooterContainer>
      <TypoLabel type="large" css={{ color: '$dark3', textAlign: 'center' }} as="p">
        ©Lim Ji Hoon, with Next.js
      </TypoLabel>
    </FooterContainer>
  );
}

const FooterContainer = styled('footer', {
  width: '100%',
  padding: '40px 50px',
  backgroundColor: '$light3',
  boxSizing: 'border-box'
});

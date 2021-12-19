import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import { TypoHeadingH5 } from '../Common/Typography';

interface ISpecialArticleRowTitleProps {
  children?: ReactNode;
}

export default function SpecialArticleRowTitle({
  children
}: ISpecialArticleRowTitleProps) {
  return (
    <SpecialArticleRowTitleContainer>
      <TypoHeadingH5
        css={{
          color: 'white',
          textShadow:
            '0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.32)',
          whiteSpace: 'pre-wrap'
        }}
      >
        {children}
      </TypoHeadingH5>
    </SpecialArticleRowTitleContainer>
  );
}

const SpecialArticleRowTitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  height: 84,
  padding: 12,
  borderRadius: '0 0 15px 15px',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0
});

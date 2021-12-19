import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import SpecialArticleRowImage from './SpecialArticleRowImage';
import SpecialArticleRowTitle from './SpecialArticleRowTitle';

interface ISpecialArticleRowProps {
  empty?: boolean;
  children?: ReactNode;
}

export default function SpecialArticleRow({
  empty,
  children
}: ISpecialArticleRowProps) {
  return (
    <a style={{ cursor: empty ? 'default' : 'pointer' }}>
      <SpecialArticleRowContainer empty={!!empty}>
        {empty ? <SpecialArticleRowEmpty /> : children}
      </SpecialArticleRowContainer>
    </a>
  );
}

const SpecialArticleRowEmpty = styled('article', {
  width: 250,
  height: 150,
  borderRadius: 15,
  background: '$light2'
});

const SpecialArticleRowContainer = styled('article', {
  width: 250,
  height: 150,
  borderRadius: 15,
  position: 'relative',
  transitionProperty: 'transform,box-shadow',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '200ms',
  variants: {
    empty: {
      false: {
        '&:hover': {
          outline: '3px solid rgba(0,0,0,.2)'
        },
        '@bp2': {
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '$lightEl6',
            outline: 'none'
          }
        }
      }
    }
  }
});

SpecialArticleRow.Title = SpecialArticleRowTitle;
SpecialArticleRow.Image = SpecialArticleRowImage;

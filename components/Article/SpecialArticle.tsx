import { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import SpecialArticleImage from './SpecialArticleImage';
import SpecialArticleTitle from './SpecialArticleTitle';

interface ISpecialArticleProps {
  empty?: boolean;
  children?: ReactNode;
}

export default function SpecialArticle({ empty, children }: ISpecialArticleProps) {
  return (
    <a style={{ cursor: empty ? 'default' : 'pointer' }}>
      <SpecialArticleContainer empty={!!empty}>
        {empty ? <SpecialArticleEmpty /> : children}
      </SpecialArticleContainer>
    </a>
  );
}

const SpecialArticleEmpty = styled('article', {
  width: 250,
  height: 150,
  borderRadius: 15,
  background: '$light2'
});

const SpecialArticleContainer = styled('article', {
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

SpecialArticle.Title = SpecialArticleTitle;
SpecialArticle.Image = SpecialArticleImage;

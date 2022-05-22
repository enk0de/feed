import Image, { ImageProps } from 'next/image';
import { styled } from '../../stitches.config';

export default function SpecialArticleRowImage({
  alt,
  ...rest
}: { alt: string } & ImageProps) {
  return (
    <SpecialArticleRowImageContainer className="special-article-row-img">
      <figure style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image {...rest} alt={alt} layout="fill" objectFit="cover" priority />
      </figure>
    </SpecialArticleRowImageContainer>
  );
}

const SpecialArticleRowImageContainer = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: 15,
  overflow: 'hidden',
  transitionProperty: 'transform',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '500ms'
});

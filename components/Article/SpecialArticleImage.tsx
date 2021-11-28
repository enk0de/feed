import Image, { ImageProps } from 'next/image';
import { styled } from '../../stitches.config';

export default function SpecialArticleImage({
  alt,
  ...rest
}: { alt: string } & ImageProps) {
  return (
    <SpecialArticleImageContainer>
      <figure style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image {...rest} alt={alt} layout="fill" objectFit="cover" priority />
      </figure>
    </SpecialArticleImageContainer>
  );
}

const SpecialArticleImageContainer = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: 15,
  overflow: 'hidden'
});

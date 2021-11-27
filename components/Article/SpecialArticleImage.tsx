import Image, { ImageProps } from 'next/image';
import { styled } from '../../stitches.config';

export default function SpecialArticleImage({
  alt,
  ...rest
}: { alt: string } & ImageProps) {
  return (
    <SpecialArticleImageContainer>
      <Image {...rest} alt={alt} layout="fill" objectFit="cover" />
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

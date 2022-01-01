import { default as Image, ImageProps } from 'next/image';
import { styled } from '../../stitches.config';

export default function MDXResponsiveImage(props: ImageProps) {
  return (
    <ImageWrapper>
      <Image
        {...props}
        alt={props.alt}
        layout="responsive"
        loading="lazy"
        quality="100"
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled('span', {
  '*': {
    borderRadius: 10,
    transition: '0.2s'
  }
});

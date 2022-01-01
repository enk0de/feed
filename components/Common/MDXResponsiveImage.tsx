import { default as Image, ImageProps } from 'next/image';
import { css } from '../../stitches.config';

export default function MDXResponsiveImage(props: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt}
      layout="responsive"
      loading="lazy"
      quality="100"
      className={ResponsiveImageStyle()}
    />
  );
}

const ResponsiveImageStyle = css({
  borderRadius: 10
});

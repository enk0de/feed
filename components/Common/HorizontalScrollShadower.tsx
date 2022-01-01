import { CSS } from '@stitches/react';
import { StyledComponent } from '@stitches/react/types/styled-component';
import { ReactNode, UIEvent, useCallback, useEffect, useRef, useState } from 'react';
import { styled } from '../../stitches.config';

interface IHorizontalScrollShadowerProps {
  containerStyle?: CSS;
  scrollAreaStyle?: CSS;
  children?: ReactNode;
}

const withHorizontalScrollShadower = (
  ContainerStitchesComponent: StyledComponent<any>
) => {
  const Component = ({
    containerStyle,
    scrollAreaStyle,
    children
  }: IHorizontalScrollShadowerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const [scrolledLeft, setScrolledLeft] = useState(false);
    const [scrolledRight, setScrolledRight] = useState(false);

    const onScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
      const scrollLeft = event.currentTarget.scrollLeft;
      const scrollWidth = event.currentTarget.scrollWidth;
      const containerWidth = containerRef.current?.clientWidth;

      if (!containerWidth || scrollWidth <= containerWidth) {
        return;
      }

      if (scrollLeft === 0) {
        setScrolledLeft(false);
      }

      if (scrollLeft + containerWidth === scrollWidth) {
        setScrolledRight(false);
      } else if (scrollLeft > 0) {
        setScrolledLeft(true);
        setScrolledRight(true);
      }
    }, []);

    useEffect(() => {
      if (scrollRef.current?.scrollWidth) {
        const containerWidth = containerRef.current?.clientWidth;

        if (!containerWidth) return;
        if (scrollRef.current.scrollWidth > containerWidth) {
          setScrolledRight(true);
        }
      }
    }, [scrollRef, containerRef]);

    return (
      <ContainerStitchesComponent ref={containerRef} css={containerStyle}>
        <ScrollArea ref={scrollRef} onScroll={onScroll} css={scrollAreaStyle}>
          {children}
        </ScrollArea>
        <ScrollShadow type="left" invisible={!scrolledLeft} />
        <ScrollShadow type="right" invisible={!scrolledRight} />
      </ContainerStitchesComponent>
    );
  };

  return Component;
};

export default withHorizontalScrollShadower;

const ScrollArea = styled('div', {
  display: 'flex',
  overflow: 'scroll',
  position: 'relative',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none'
});

const ScrollShadow = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: 50,
  pointerEvents: 'none',
  transitionProperty: 'opacity',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '200ms',
  variants: {
    type: {
      right: {
        right: 0,
        background:
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 200) 100%)'
      },
      left: {
        left: 0,
        background:
          'linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 200) 100%)'
      }
    },
    invisible: {
      true: {
        opacity: 0
      }
    }
  },
  defaultVariants: {
    type: 'right'
  }
});

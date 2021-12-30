import Image from 'next/image';
import Link from 'next/link';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../../constants/paddings';
import useScrolled from '../../hooks/useScrolled';
import { styled } from '../../stitches.config';
import ThemeToggler from './ThemeToggler';

export default function Header() {
  const scrolled = useScrolled();

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderLeftArea>
        <Link href="/" passHref>
          <LogoImageWrapper>
            <Image
              src="/assets/logo.svg"
              layout="fill"
              alt="hoondevfeed"
              priority={true}
            ></Image>
          </LogoImageWrapper>
        </Link>
        <HeaderNavWrapper>
          <HeaderNavItem>
            <a href="https://www.hoondev.com/" target="_blank" rel="noreferrer">
              resume
            </a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="https://github.com/hoondeveloper" target="_blank" rel="noreferrer">
              github
            </a>
          </HeaderNavItem>
        </HeaderNavWrapper>
      </HeaderLeftArea>
      {/* <ThemeToggler /> */}
    </HeaderContainer>
  );
}

const LogoImageWrapper = styled('a', {
  position: 'relative',
  width: 130,
  height: 23,
  '@bp2': {
    width: 152,
    height: 27
  },
  cursor: 'pointer'
});

const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `20px ${FRAME_PADDING_MOBILE}px`,
  '@bp2': {
    padding: `20px ${FRAME_PADDING_DEFAULT}px`
  },
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(5px)',
  variants: {
    scrolled: {
      true: {
        boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  transitionProperty: 'box-shadow',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '400ms'
});

const HeaderLeftArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  spaceX: '15px',
  '@bp2': {
    spaceX: '25px'
  }
});

const HeaderNavWrapper = styled('ul', {
  display: 'flex',
  fontSize: 16,
  spaceX: '15px',
  '@bp2': {
    spaceX: '25px'
  }
});

const HeaderNavItem = styled('li', {
  color: '$dark2',
  fontFamily: '$msa',
  '&:hover': {
    color: '$dark3'
  }
});

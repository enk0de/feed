import Image from 'next/image';
import Link from 'next/link';
import useScrolled from '../../hooks/useScrolled';
import { styled } from '../../stitches.config';
import ThemeToggler from './ThemeToggler';

export default function Header() {
  const scrolled = useScrolled();

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderLeftArea>
        <Image
          src="/assets/logo.svg"
          width="152"
          height="27"
          alt="hoondevfeed"
          priority={true}
        ></Image>
        <HeaderNavWrapper>
          <HeaderNavItem>
            <Link href="https://www.hoondev.com/">resume</Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link href="https://github.com/hoondeveloper">github</Link>
          </HeaderNavItem>
        </HeaderNavWrapper>
      </HeaderLeftArea>
      <ThemeToggler />
    </HeaderContainer>
  );
}

const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 40px',
  background: 'white',
  backdropFilter: 'blur(40px)',
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
  spaceX: '25px'
});

const HeaderNavWrapper = styled('ul', {
  display: 'flex',
  spaceX: '25px',
  fontSize: 16
});

const HeaderNavItem = styled('li', {
  color: '$dark2',
  fontFamily: '$msa',
  '&:hover': {
    color: '$dark3'
  }
});

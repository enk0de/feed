import classNames from 'classnames';
import Image from 'next/image';
import { ReactNode } from 'react';
import useScrolled from '../../hooks/useScrolled';
import ThemeToggler from './ThemeToggler';

export default function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={classNames([
        scrolled && 'border-b border-black border-opacity-5',
        'fixed top-0 left-0 right-0 flex justify-between items-center px-[40px] py-[20px] bg-white backdrop-blur-[40px]'
      ])}
    >
      <div className="flex items-center space-x-[25px]">
        <Image src="/assets/logo.svg" width="152" height="27" alt="hoondevfeed"></Image>
        <ul className="flex space-x-[25px] text-[16px]">
          <HeaderNavItem>resume</HeaderNavItem>
          <HeaderNavItem>github</HeaderNavItem>
        </ul>
      </div>
      <ThemeToggler />
    </header>
  );
}

function HeaderNavItem({ children }: { children: ReactNode }) {
  return (
    <li className="text-dark-2 font-msa">
      <a>{children}</a>
    </li>
  );
}

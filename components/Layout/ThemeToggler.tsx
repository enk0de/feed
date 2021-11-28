import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { styled } from '../../stitches.config';

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  let src;

  if (!mounted) return null;

  switch (resolvedTheme) {
    case 'light':
      src = '/assets/sun.svg';
      break;
    case 'dark':
      src = '/assets/moon.svg';
      break;
    default:
      src =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      break;
  }

  return (
    <ThemeTogglerContainer
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      <Image
        src={src}
        layout="fill"
        alt={
          resolvedTheme === 'light' ? 'Turn on the dark mode' : 'Turn on the light mode'
        }
      />
    </ThemeTogglerContainer>
  );
}

const ThemeTogglerContainer = styled('button', {
  position: 'relative',
  width: 24,
  height: 24
});

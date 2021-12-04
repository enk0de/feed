import { styled } from '../../stitches.config';

export const TypoHeadingH1 = styled('h1', {
  fontWeight: 'bold',
  fontSize: 40,
  lineHeight: '54px'
});

export const TypoHeadingH2 = styled('h2', {
  fontWeight: 'bold',
  fontSize: 32,
  lineHeight: '44px'
});

export const TypoHeadingH3 = styled('h3', {
  fontWeight: 'bold',
  fontSize: 28,
  lineHeight: '38px'
});

export const TypoHeadingH4 = styled('h4', {
  fontWeight: 'bold',
  fontSize: 24,
  lineHeight: '32px'
});

export const TypoHeadingH5 = styled('h5', {
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: '28px'
});

export const TypoHeadingH6 = styled('h6', {
  fontWeight: 'bold',
  fontSize: 16,
  lineHeight: '22px'
});

export const TypoLead = styled('p', {
  fontWeight: 'bold',
  fontSize: 14,
  lineHeight: '24px'
});

export const TypoSmall = styled('p', {
  fontWeight: 'normal',
  fontSize: 12,
  lineHeight: '14px'
});

export const TypoTiny = styled('p', {
  fontWeight: 'bold',
  fontSize: 10,
  lineHeight: '12px'
});

export const TypoBody = styled('p', {
  fontWeight: 'normal',
  variants: {
    type: {
      14: {
        fontSize: 14,
        lineHeight: '24px'
      },
      16: {
        fontSize: 16,
        lineHeight: '24px'
      }
    }
  }
});

export const TypoBlockQuotes = styled('p', {
  fontWeight: 'semi-bold',
  fontSize: 20,
  lineHeight: '28px'
});

export const TypoLabel = styled('span', {
  fontWeight: 'normal',
  variants: {
    type: {
      small: {
        fontSize: 10,
        lineHeight: '14px',
        letterSpacing: 0.2
      },
      medium: {
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: 0.2
      },
      large: {
        fontSize: 14,
        lineHeight: '24px'
      }
    }
  }
});

import { styled } from '../../stitches.config';

export const TypoHeadingH1BaseStyleObj = {
  fontWeight: 'bold',
  fontSize: 40,
  lineHeight: '54px'
};

export const TypoHeadingH1 = styled('h1', TypoHeadingH1BaseStyleObj);

export const TypoHeadingH2BaseStyleObj = {
  fontWeight: 'bold',
  fontSize: 32,
  lineHeight: '44px'
};

export const TypoHeadingH2 = styled('h2', TypoHeadingH2BaseStyleObj);

export const TypoHeadingH3BaseStyleObj = {
  fontWeight: 'bold',
  fontSize: 28,
  lineHeight: '38px'
};

export const TypoHeadingH3 = styled('h3', TypoHeadingH3BaseStyleObj);

export const TypoHeadingH4BaseStyleObj = {
  fontWeight: 'bold',
  fontSize: 24,
  lineHeight: '32px'
};

export const TypoHeadingH4 = styled('h4', TypoHeadingH4BaseStyleObj);

export const TypoHeadingH5BaseStyleObj = {
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: '28px'
};

export const TypoHeadingH5 = styled('h5', TypoHeadingH5BaseStyleObj);

export const TypoHeadingH6BaseStyleObj = {
  fontWeight: 'bold',
  fontSize: 16,
  lineHeight: '22px'
};

export const TypoHeadingH6 = styled('h6', TypoHeadingH6BaseStyleObj);

export const TypoLead = styled('p', {
  fontWeight: 'bold',
  fontSize: 14,
  lineHeight: '28px'
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

export const TypoBody14BaseStyleObj = {
  fontSize: 14,
  lineHeight: '28px'
};

export const TypoBody16BaseStyleObj = {
  fontSize: 16,
  lineHeight: '28px'
};

export const TypoBody = styled('p', {
  fontWeight: 'normal',
  variants: {
    type: {
      14: TypoBody14BaseStyleObj,
      16: TypoBody16BaseStyleObj
    }
  },
  defaultVariants: {
    type: 16
  }
});

export const TypoBlockQuotes = styled('p', {
  fontWeight: 'semi-bold',
  fontSize: 20,
  lineHeight: '28px'
});

export const TypoLabelSmallBaseStyleObj = {
  fontSize: 10,
  lineHeight: '14px',
  letterSpacing: 0.2
};

export const TypoLabelMediumBaseStyleObj = {
  fontSize: 12,
  lineHeight: '16px',
  letterSpacing: 0.2
};

export const TypoLabelLargeBaseStyleObj = {
  fontSize: 14,
  lineHeight: '28px'
};

export const TypoLabel = styled('span', {
  fontWeight: 'normal',
  variants: {
    type: {
      small: TypoLabelSmallBaseStyleObj,
      medium: TypoLabelMediumBaseStyleObj,
      large: TypoLabelLargeBaseStyleObj
    }
  }
});

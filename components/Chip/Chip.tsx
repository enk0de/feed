import { useContext } from 'react';
import { styled } from '../../stitches.config';
import withHorizontalScrollShadower from '../../hocs/withHorizontalScrollShadower';
import { TypoLabelLargeBaseStyleObj } from '../Common/Typography';
import { ChipSetContext } from './context';
import { IChipProps, IChipSetProps } from './interface';

export default function Chip<T>({ value, disabled, children }: IChipProps<T>) {
  const context = useContext(ChipSetContext);
  const selected = context?.value !== undefined ? context?.value === value : false;

  const handleChipClick = () => {
    context?.onChange?.({ value });
  };

  return (
    <ChipContainer
      selected={selected}
      disabled={disabled || context?.disabled}
      onClick={handleChipClick}
    >
      {children}
    </ChipContainer>
  );
}

function ChipSet<T>({ value, disabled, onChange, children }: IChipSetProps<T>) {
  return (
    <ChipSetContext.Provider
      value={{
        value,
        disabled,
        onChange
      }}
    >
      <ChipSetContainer scrollAreaStyle={{ spaceX: 8 }}>{children}</ChipSetContainer>
    </ChipSetContext.Provider>
  );
}

Chip.Set = ChipSet;

const _ChipSetContainer = styled('ul', {
  position: 'relative',
  overflow: 'hidden',
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});

const ChipSetContainer = withHorizontalScrollShadower(_ChipSetContainer);

const ChipContainer = styled(
  'li',
  {
    borderRadius: 100,
    display: 'inline-block',
    padding: '3px 10px',
    cursor: 'pointer',
    flexShrink: 0,
    '@bp2': {
      '&:hover': {
        backgroundColor: '$light3',
        color: '$dark2'
      },
      '&:active, &:focus': {
        backgroundColor: '$light1',
        color: '$dark2'
      }
    },
    variants: {
      selected: {
        true: {
          pointerEvents: 'none',
          backgroundColor: '$dark1',
          color: '$light4'
        },
        false: {
          backgroundColor: '$light2',
          color: '$dark2'
        }
      },
      disabled: {
        true: {
          pointerEvents: 'none',
          cursor: 'not-allowed',
          backgroundColor: '$light3',
          color: '$dark4'
        }
      }
    },
    defaultVariants: {
      selected: false,
      disabled: false
    }
  },
  TypoLabelLargeBaseStyleObj
);

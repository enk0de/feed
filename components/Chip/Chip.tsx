import { FC, useCallback, useContext, useState } from 'react';
import { styled } from '../../stitches.config';
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
      <ChipSetContainer>{children}</ChipSetContainer>
    </ChipSetContext.Provider>
  );
}

Chip.Set = ChipSet;

const ChipSetContainer = styled('ul', {
  display: 'flex',
  spaceX: 8
});

const ChipContainer = styled(
  'li',
  {
    borderRadius: 100,
    display: 'inline-block',
    padding: '3px 10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '$light3',
      color: '$dark2'
    },
    '&:active, &:focus': {
      backgroundColor: '$light1',
      color: '$dark2'
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

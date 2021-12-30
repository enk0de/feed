import { ReactNode } from 'react';

export interface IChipProps<ValueType> {
  value?: ValueType;
  disabled?: boolean;
  children?: ReactNode;
}

export interface IChipSetProps<ValueType> {
  value?: ValueType;
  onChange?: (e: { value?: ValueType }) => void;
  disabled?: boolean;
  children?: ReactNode;
}

export interface IChipSetContextProps<ValueType> {
  value?: ValueType;
  onChange?: (e: { value?: ValueType }) => void;
  disabled?: boolean;
}

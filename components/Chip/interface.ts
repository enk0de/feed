import { ReactNode } from 'react';

export interface IChipProps {
  value?: any;
  disabled?: boolean;
  children?: ReactNode;
}

export interface IChipSetProps {
  value?: any;
  onChange?: (e: { value?: any }) => void;
  disabled?: boolean;
  children?: ReactNode;
}

export interface IChipSetContextProps {
  value?: any;
  onChange?: (e: { value?: any }) => void;
  disabled?: boolean;
}

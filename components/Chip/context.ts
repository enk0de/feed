import { createContext } from 'react';
import { IChipSetContextProps } from './interface';

export const ChipSetContext = createContext<IChipSetContextProps | null>(null);

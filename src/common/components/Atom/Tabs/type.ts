import { HTMLAttributes, ReactNode } from 'react';

export interface TabsProps extends HTMLAttributes<HTMLElement> {
  readonly value: number;
  readonly onChangeTab: (value: number) => void;
  readonly children: ReactNode[];
}

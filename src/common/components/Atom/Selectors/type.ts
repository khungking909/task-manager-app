import { HTMLAttributes, ReactNode } from 'react';

export interface SelectorsProps extends HTMLAttributes<HTMLDivElement> {
  readonly icon?: ReactNode;
  readonly title?: string;
  readonly image?: string;
  readonly value: string;
}

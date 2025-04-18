import { HTMLAttributes } from 'react';

export interface BadgeTypes extends HTMLAttributes<HTMLElement> {
  readonly size?: 'small' | 'medium' | 'large';
  readonly outline?: boolean;
  readonly shape?: 'sharp' | 'circle';
  readonly roundness?: 'pill' | 'rounded';
  readonly color?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info';
}

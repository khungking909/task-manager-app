import { HTMLAttributes } from 'react';

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  readonly action?: string;
}

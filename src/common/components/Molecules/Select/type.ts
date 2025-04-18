import ResponsiveType from 'src/types/responsive';

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly active?: boolean;
  readonly value: string;
  readonly image?: string;
  readonly selectorIcon?: React.ReactNode;
  readonly selectorTitle?: string;
  readonly elementSpacingTop?: number | string | ResponsiveType;
}

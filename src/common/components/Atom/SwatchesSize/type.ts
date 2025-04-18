export interface SwatchesSizeProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly size?: 'small' | 'medium' | 'large';
  readonly active?: boolean;
  readonly sizeValue: string;
}

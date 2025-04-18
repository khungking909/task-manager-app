export interface SwatchesColorProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly size?: 'small' | 'medium' | 'large';
  readonly active?: boolean;
  readonly color: string;
}

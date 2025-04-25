export interface CircularProgressProps {
  readonly color: 'light' | 'dark';
  readonly percentage: number;
  readonly size?: 'xSmall' | 'small' | 'medium' | 'large';
}

export interface ButtonProps {
  readonly className?: string;
  readonly children?: React.ReactNode;
  readonly shape?: 'default' | 'square' | 'underline';
  readonly roundness?: 'pill' | 'rounded' | 'sharp';
  readonly outline?: boolean;
  readonly size?: 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';
  readonly onClick?: () => void;
  readonly type?: 'button' | 'submit' | 'reset';
  readonly disabled?: boolean;
  readonly IconLeft?: React.ReactNode;
  readonly IconRight?: React.ReactNode;
  readonly color?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info';
  readonly fullWidth?: boolean;
  readonly align?: 'left' | 'center' | 'right';
}

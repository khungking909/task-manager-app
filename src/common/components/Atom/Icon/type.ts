export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly color?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info' | 'gray' | 'gray-500';
  readonly box?: boolean;
  readonly boxVariant?: 'circle' | 'rounded' | 'square';
  readonly boxSize?: 'xSmall' | 'small' | 'medium' | 'large';
  readonly boxColor?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info' | 'gray' | 'gray-500';
  readonly size?:
    | '2XSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | '2XLarge'
    | '3XLarge'
    | '4XLarge'
    | '5XLarge'
    | '6XLarge'
    | '7XLarge'
    | '8XLarge'
    | '9XLarge'
    | '10XLarge'
    | '11XLarge'
    | '12XLarge'
    | '13XLarge';
  readonly disabled?: boolean;
}

import ResponsiveType from 'src/types/responsive';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly columns?: number | ResponsiveType;
  readonly gap?: number | string | ResponsiveType;
  readonly rowGap?: number | string | ResponsiveType;
  readonly columnGap?: number | string | ResponsiveType;
  readonly autoFlow?: 'row' | 'column';
}

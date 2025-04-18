export interface PaginationNumberItemProps extends React.HTMLAttributes<HTMLElement> {
  readonly active?: boolean;
  readonly onClickItem?: () => void;
  readonly currentPage: number | string;
  readonly roundness?: 'rounded' | 'circle' | 'square';
  readonly color?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info';
  readonly outline?: boolean;
}

export interface PaginationNumberProps {
  readonly totalPages?: number;
  readonly activePage: number;
  readonly setActivePage: React.Dispatch<React.SetStateAction<number>>;
  readonly className?: string;
  readonly roundness?: 'rounded' | 'circle' | 'square';
  readonly color?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info';
  readonly disabled?: boolean;
  readonly outline?: boolean;
  readonly nextPrevButton?: boolean;
  readonly lastFirstButton?: boolean;
}

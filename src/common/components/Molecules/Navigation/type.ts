export interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly totalPage?: number;
  readonly currentPage?: number;
  readonly totalVisiblePage?: number;
  readonly variant?: 'dot' | 'pill';
  readonly direction?: 'horizontal' | 'vertical';
  readonly onClickNavigationItem?: (page: number) => void;
  readonly color?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info' | 'gray' | 'gray-500';
}

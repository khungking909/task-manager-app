export interface NavigationItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  readonly variant?: 'dot' | 'pill';
  readonly active?: boolean;
  readonly direction?: 'horizontal' | 'vertical';
  readonly color?: 'dark' | 'light' | 'danger' | 'warning' | 'success' | 'info' | 'gray' | 'gray-500';
}

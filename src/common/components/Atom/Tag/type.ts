export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly roundness?: 'rounded' | 'pill' | 'default' | 'status';
  readonly color?:
    | 'dark'
    | 'light'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'gray'
    | 'gray-500'
    | 'gray-100';
}

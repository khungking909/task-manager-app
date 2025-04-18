export interface TabItemProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly active?: boolean;
  readonly title: string;
}

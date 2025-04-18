export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly tabPanelIndex: number;
  readonly activeTab: number;
}

export interface ToolbarSectionProps {
  readonly selected: number; // Selected option
  readonly total?: number; // Total number of items
  readonly onClickItem?: (id: number) => void; // Callback when clicking on an item
}

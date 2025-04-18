export interface CartCardProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
  readonly image: string;
  readonly size: string;
  readonly color: string;
  readonly onRemove?: () => void;
  readonly onChangeQuantity?: (quantity: number) => void;
  readonly stock?: number;
}

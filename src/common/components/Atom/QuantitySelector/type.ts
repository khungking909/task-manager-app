export interface QuantitySelectorProps {
  readonly quantity: number;
  readonly fill?: boolean;
  readonly min?: number;
  readonly max?: number;
  readonly onChangeQuantity?: (value: number) => void;
}

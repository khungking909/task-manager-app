export interface ProductCellProps {
  readonly rate?: number;
  readonly name: string;
  readonly image: string;
  readonly price: number;
  readonly salePrice?: number;
  readonly description?: string;
  readonly onClickAddToCart?: () => void;
  readonly onClickAddToWishlist?: () => void;
}

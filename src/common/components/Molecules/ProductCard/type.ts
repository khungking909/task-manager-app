export interface ProductCardProps {
  readonly rate?: number;
  readonly name: string;
  readonly image: string;
  readonly price: number;
  readonly salePrice?: number;
  readonly columns?: number;
  readonly onClickAddToCart?: () => void;
  readonly onClickAddToFavorite?: () => void;
}

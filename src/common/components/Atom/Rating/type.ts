export interface RatingTypes {
  readonly starValue?: number;
  readonly title?: string;
  readonly onClickStar?: (index: number) => () => void;
  readonly allowHover?: boolean;
  readonly className?: string;
  readonly emptyStar?: React.ReactNode;
  readonly yellowStar?: React.ReactNode;
}

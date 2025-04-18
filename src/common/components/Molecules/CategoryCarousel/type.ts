export interface OutstandingProduct {
  readonly name: string;
  readonly image: string;
}

export interface CategoryCarouselProps {
  readonly outstandingList: OutstandingProduct[];
  readonly title?: string;
}

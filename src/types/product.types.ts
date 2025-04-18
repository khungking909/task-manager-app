import { BaseDataTimestamp } from 'src/types/common';

export interface ProductResponse extends BaseDataTimestamp {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  salePrice: number;
  shortDescription: string;
  description: string;
  images: string[];
  color: ProductVariantResponse[];
  size: ProductVariantResponse[];
  category: string;
  brand: string;
  stock: number;
  rating: number;
  reviewCount: number;
  viewCount: number;
}

export interface ProductVariantResponse {
  id: number;
  name: string;
  key: string;
  value: string;
}

export interface ProductFilterRequest {
  page: number;
  limit: number;
}

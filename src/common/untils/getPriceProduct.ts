import { ProductResponse } from 'src/types';

export const getPriceProduct = (product: ProductResponse) => {
  return product.salePrice ? product.price - product.salePrice : product.price;
};

import { getPriceProduct } from 'src/common/untils/getPriceProduct';
import { ProductResponse } from 'src/types';

export const sortByPriceHighToLow = (list: ProductResponse[] | undefined) => {
  if (!list) return [];

  return [...list].sort((a, b) => getPriceProduct(b) - getPriceProduct(a));
};

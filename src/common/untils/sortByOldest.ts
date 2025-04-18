import { ProductResponse } from 'src/types';

export const sortByOldest = (list: ProductResponse[] | undefined) => {
  if (!list) return [];

  return [...list].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
};

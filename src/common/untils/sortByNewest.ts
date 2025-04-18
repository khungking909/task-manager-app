import { ProductResponse } from 'src/types';

export const sortByNewest = (list: ProductResponse[] | undefined) => {
  if (!list) return [];

  return [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

import { baseApi } from 'src/app/apis/baseApi';
import { ProductFilterRequest, ProductResponse } from 'src/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse[], ProductFilterRequest | void>({
      query: (params) => {
        if (!params) return '/products';
        const { page = 1, limit = 12 } = params;

        return `/products?page=${page}&limit=${limit}`;
      },
      providesTags: (_, __, page) => [{ type: 'Products', page }],
      keepUnusedDataFor: 60 * 1000,
    }),
    getProductById: builder.query<ProductResponse, string>({
      query: (slug: string) => `/products/${slug}`,
      providesTags: (_, __, slug) => [{ type: 'Products', slug }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;

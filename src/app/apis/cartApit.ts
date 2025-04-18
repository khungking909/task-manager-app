import { baseApi } from 'src/app/apis/baseApi';
import { CartItem, CartResponse } from 'src/types/cart.types';

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCartItem: builder.mutation<void, CartItem>({
      query: (item: CartItem) => ({
        url: `/carts`,
        method: 'POST',
        body: { product: item },
      }),
      invalidatesTags: ['Carts'],
    }),
    getCarts: builder.query<CartResponse, void>({
      query: () => `/carts`,
      providesTags: ['Carts'],
      keepUnusedDataFor: 60 * 1000,
    }),
    removeItemFromCart: builder.mutation<void, string>({
      query: (cartId: string) => ({
        url: `/carts/${cartId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Carts'],
    }),
    updateCartItem: builder.mutation<void, { cartId: string; quantity: number }>({
      query: ({ cartId, quantity }) => ({
        url: `/carts/${cartId}`,
        method: 'PATCH',
        body: { quantity },
      }),
      invalidatesTags: ['Carts'],
    }),
  }),
});

export const {
  useAddCartItemMutation,
  useGetCartsQuery,
  useRemoveItemFromCartMutation,
  useUpdateCartItemMutation,
} = cartApi;
export default cartApi;

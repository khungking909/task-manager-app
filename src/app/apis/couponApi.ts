import { baseApi } from 'src/app/apis/baseApi';
import { CouponResponse } from 'src/types/coupon.types';

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCouponByCode: builder.query<CouponResponse, string>({
      query: (code: string) => ({
        url: `/coupons/${code}`,
      }),
      providesTags: ['Coupons'],
    }),
  }),
});

export const { useLazyGetCouponByCodeQuery } = couponApi;
export default couponApi;

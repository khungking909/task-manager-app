import { baseApi } from 'src/app/apis/baseApi';
import { ReviewResponse } from 'src/types/review.type';

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviewByProductSlug: builder.query<ReviewResponse, string>({
      query: (productSlug) => `/products/${productSlug}/reviews`,
    }),
  }),
});

export const { useGetReviewByProductSlugQuery } = reviewApi;
export default reviewApi;

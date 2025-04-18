import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'src/app/apis/baseApi';
import { authSlice } from 'src/app/slices/authSlice/authSlice';
import { toastSlice } from 'src/app/slices/toastSlice/toastSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice.reducer,
    toast: toastSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

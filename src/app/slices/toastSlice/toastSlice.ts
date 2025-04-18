import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Toast, ToastState } from 'src/app/slices/toastSlice/toastType.types';

const initialState: ToastState = {
  open: false,
  toast: {
    message: null,
    title: null,
    prefixIcon: null,
    duration: 3000,
    position: 'top-right',
  },
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    hiddenToast: (state) => {
      return { ...state, open: false, toast: initialState.toast };
    },
    showToast: (state, action: PayloadAction<Toast>) => {
      return {
        ...state,
        open: true,
        toast: action.payload,
      };
    },
  },
});

export const { hiddenToast, showToast } = toastSlice.actions;
export default toastSlice.reducer;

import { ToastState } from 'src/app/zustand/toast/type';
import { create } from 'zustand';

export const useToastStore = create<ToastState>((set) => ({
  open: false,
  toast: {
    message: null,
    title: null,
    prefixIcon: null,
    duration: 3000,
    position: 'top-right',
  },
  showToast: (toast) => {
    set({ open: true, toast });
  },
  hiddenToast: () => {
    set({
      open: false,
      toast: {
        message: null,
        title: null,
        prefixIcon: null,
        duration: 3000,
        position: 'top-right',
      },
    });
  },
}));

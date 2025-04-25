export interface ToastState {
  open: boolean;
  toast: Toast;
  showToast: (toast: Toast) => void;
  hiddenToast: () => void;
}

export type Toast = {
  message: string | null;
  title: string | null;
  prefixIcon?: React.ReactNode;
  duration?: number;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom';
  type?: 'success' | 'error' | 'warning' | 'info';
};

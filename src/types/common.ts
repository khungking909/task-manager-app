export interface BaseDataTimestamp {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ToastType {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

export interface ShowToastType {
  message: string;
  type: ToastType['type'];
  title?: string;
  duration?: number;
}

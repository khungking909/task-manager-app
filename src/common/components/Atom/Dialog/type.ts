export interface DialogProps {
  readonly children?: React.ReactNode;
  readonly open?: boolean;
  readonly onCloseDialog?: (value: boolean) => void;
  readonly type?: 'left' | 'right' | 'top' | 'bottom' | 'center';
  readonly delay?: number;
  readonly fullScreen?: boolean;
}

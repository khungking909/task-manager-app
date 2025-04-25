import { useToastStore } from 'src/app/zustand/toast';
import { useShallow } from 'zustand/shallow';

export const useToast = () => {
  const { showToast, open, hiddenToast, toast } = useToastStore(useShallow((state) => state));

  return {
    showToast,
    open,
    hiddenToast,
    toast,
  };
};

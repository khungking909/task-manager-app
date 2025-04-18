import { useAppDispatch } from '@hooks/useAppDispatch';
import { useCallback } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { hiddenToast, showToast } from 'src/app/slices/toastSlice/toastSlice';
import { Toast } from 'src/app/slices/toastSlice/toastType.types';
import { RootState } from 'src/app/store/store';

export const useToast = () => {
  const dispatch = useAppDispatch();

  const { open, toast } = useSelector((state: RootState) => state.toast, shallowEqual);

  const onShowToast = useCallback(
    async (payload: Toast) => {
      return await dispatch(showToast(payload));
    },
    [dispatch],
  );

  const onHiddenToast = useCallback(async () => {
    return await dispatch(hiddenToast());
  }, [dispatch]);

  return { open, toast, onShowToast, onHiddenToast };
};

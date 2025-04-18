import { Close } from '@components/Atom/Icon/icons/Close';
import { ErrorIcon } from '@components/Atom/Icon/icons/Error';
import { Info } from '@components/Atom/Icon/icons/Info';
import { Success } from '@components/Atom/Icon/icons/Success';
import { Warning } from '@components/Atom/Icon/icons/Warning';
import useScreenSize from '@hooks/useScreenSize';
import { useEffect, useMemo } from 'react';
import { useToast } from 'src/app/slices/toastSlice/toastSelector';
import { arrayToString } from 'src/common/untils/arrayToString';
import { getIsMobile } from 'src/common/untils/isMobile';
import notificationModuleClass from './Notification.module.scss';

const Notification = () => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { onHiddenToast, open, toast } = useToast();
  const { message, title, prefixIcon, duration = 3000, position, type } = toast;

  const positionProps = useMemo(() => {
    if (isMobile) return position.includes('top') ? 'top' : 'bottom';

    return position;
  }, [position, isMobile]);

  const prefixIconProps = useMemo(() => {
    if (prefixIcon) {
      return prefixIcon;
    }

    switch (type) {
      case 'success':
        return <Success size={isMobile ? 'large' : 'xLarge'} />;
      case 'error':
        return <ErrorIcon size={isMobile ? 'large' : 'xLarge'} />;
      case 'warning':
        return <Warning size={isMobile ? 'large' : 'xLarge'} color="warning" />;
      case 'info':
        return <Info size={isMobile ? 'large' : 'xLarge'} />;
      default:
        return null;
    }
  }, [isMobile, prefixIcon, type]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onHiddenToast();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onHiddenToast, open]);

  return (
    <>
      {open && (
        <div
          className={arrayToString([
            notificationModuleClass.notification,
            notificationModuleClass[positionProps],
            notificationModuleClass[`type__${type}`],
          ])}
        >
          <div className={notificationModuleClass.header}>
            <div className={notificationModuleClass.title}>
              {prefixIconProps}
              <p>{title}</p>
            </div>
            <Close size={'xLarge'} onClick={() => onHiddenToast()} />
          </div>
          <p className={arrayToString([notificationModuleClass.message])}>{message}</p>
        </div>
      )}
    </>
  );
};

export { Notification };

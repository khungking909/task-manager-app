import { useEffect, useState } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import dialogModuleClass from './Dialog.module.scss';
import { DialogProps } from './type';

const Dialog = ({ children, open, onCloseDialog, type = 'left' }: DialogProps) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '4px';
      setVisible(true);
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      setTimeout(() => setVisible(false), 300);
    }

    return () => {
      setVisible(false);
    };
  }, [open]);

  return (
    visible && (
      <div
        className={arrayToString([dialogModuleClass.root, !open ? dialogModuleClass.closing : ''])}
        onClick={onCloseDialog ? () => onCloseDialog(false) : undefined}
        aria-hidden="true"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={arrayToString([dialogModuleClass.children, dialogModuleClass[type]])}
          aria-hidden
        >
          {children}
        </div>
      </div>
    )
  );
};

export { Dialog };

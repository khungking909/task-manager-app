import { useEffect, useState } from 'react';
import { arrayToString } from 'src/common/untils/arrayToString';
import dialogModuleClass from './Dialog.module.scss';
import { DialogProps } from './type';

const Dialog = ({ children, open, onCloseDialog, type = 'left', fullScreen = true }: DialogProps) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 300);
    }

    return () => {
      setVisible(false);
    };
  }, [open]);

  return (
    visible && (
      <div
        className={arrayToString([
          dialogModuleClass.root,
          !open ? dialogModuleClass.closing : '',
          fullScreen ? dialogModuleClass.full__Screen : '',
          dialogModuleClass[type],
        ])}
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

import React, { PropsWithChildren, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import classes from './modal.module.css';

interface ModalProps extends PropsWithChildren {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = ({ isOpen, onClose, children }: ModalProps): ReactElement | null => {
  if (!isOpen) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes['modal-overlay']} onClick={onClose}>
          <div className={classes['modal-content']}>
            <button className={classes['modal-close']} onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>,
        (document.getElementById('modal-root')) as any
      )}
    </>
  )
};

export default Modal;
import React, { PropsWithChildren, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import classes from './modal.module.css';

interface ModalProps extends PropsWithChildren {
  readonly isOpen: boolean;
  readonly title: string;
  readonly onClose: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = ({ isOpen, title, onClose, children }: ModalProps): ReactElement | null => {
  if (!isOpen) return null;

  return (
    <>
      {
        ReactDOM.createPortal(
          <div className={classes['modal-overlay']} onClick={onClose}>
            <div className={classes['modal-content']}>
              <div className={classes['modal-header']}>
                <h1>{title}</h1>
                <button className={classes['modal-close']} onClick={onClose}>
                  &times;
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>,
          document.getElementById('modal-root')!
        )
      }
    </>
  )
};

export default Modal;
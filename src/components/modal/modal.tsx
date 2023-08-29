import { useEffect, FC, ReactNode} from 'react';
import { createPortal } from 'react-dom';
import modalStyles from './modal.module.css';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('react-modals') as HTMLDivElement;

export const Modal: FC<{children: ReactNode, closeModal: () => void}> = ({children, closeModal}) => {
  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    }
    document.addEventListener('keydown', closeEsc);

    return () => {
      document.removeEventListener('keydown', closeEsc);
    }
  }, []);

  return createPortal(
    (
      <>
        <ModalOverlay closeOverlay={closeModal} />
        <div className={modalStyles.container}>
          {children}
        </div>
      </>
    ),
    modalRoot
  )
}
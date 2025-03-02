import { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ open, onClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    // hasn't established ref={dialog} yet, if not useEffect
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open])

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;

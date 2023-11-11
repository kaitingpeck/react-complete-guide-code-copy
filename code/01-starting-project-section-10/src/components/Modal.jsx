import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal(
  { children, buttonCaption, ...props },
  ref
) {
  const dialog = useRef();

  // allows this method to be exposed through the ref passed to this component,
  // by calling the ref.current in the calling component
  // this component becomes the ref in the calling component
  useImperativeHandle(ref, () => {
    return {
      open() {
        // uses the dialog ref above
        dialog.current.showModal(); // built-in method in the dialog component
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./modal.sass";

export interface ModalProps {
  open: boolean;
  closeHandler: () => void;
  showOverlay?: boolean;
  keepModalCentered: boolean;
  TransitionStyle: "fade" | "zoom" | "none";
  disableScroll?: boolean;
  children?: React.ReactElement;
  closeOnOverlayClick?: boolean;
  MouseEvent?: React.MouseEvent | undefined;
  modalStyle?: ElementCSSInlineStyle;
}
const Modal = ({
  open = false,
  closeHandler,
  showOverlay = true,
  keepModalCentered = true,
  TransitionStyle = "fade",
  children,
  closeOnOverlayClick = true,
  MouseEvent,
  modalStyle,
}: ModalProps) => {
  const [mount, setMount] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !keepModalCentered &&
      MouseEvent !== undefined &&
      modalContainerRef.current
    ) {
      // Get Client Position from MouseEvent
      // Assign that to the modal container for it's alignment
      const modalWidth = modalContainerRef.current.offsetWidth,
        modalHeight = modalContainerRef.current.offsetHeight;
      let cursorLeft = MouseEvent.clientX,
        cursorTop = MouseEvent.clientY;

      if (cursorLeft + modalWidth > window.innerWidth) {
        cursorLeft = window.innerWidth - modalWidth - 10;
      }
      if (cursorTop + modalHeight > window.innerHeight) {
        cursorTop = window.innerHeight - modalHeight - 10;
      }
      modalContainerRef.current.style.setProperty("left", `${cursorLeft}px`);
      modalContainerRef.current.style.setProperty("top", `${cursorTop}px`);
    }
    if (!open && overlayRef.current && modalContainerRef.current) {
      overlayRef.current.style.removeProperty("animation");
      modalContainerRef.current.style.removeProperty("animation");
      setTimeout(() => {
        if (overlayRef.current && modalContainerRef.current) {
          overlayRef.current.style.animation =
            "fade 300ms ease reverse forwards";
          modalContainerRef.current.style.animation = `${TransitionStyle} 200ms ease reverse forwards`;
        }
      }, 0);
    }
    if (open) {
      setMount(true);
    }
  }, [open]);

  return (
    <>
      {mount && (
        <div className="hd-ui-modal modal-container">
          <div
            className={`hd-ui-modal-overlay`}
            data-visible={showOverlay}
            onClick={closeOnOverlayClick ? closeHandler : undefined}
            ref={overlayRef}
            style={{ animation: "fade 400ms ease" }}
          ></div>
          <div
            className={`modal-child-container`}
            data-centered={keepModalCentered}
            aria-modal={true}
            style={{
              maxWidth: `${window.innerWidth}px`,
              maxHeight: `${window.innerHeight}px`,
              animation: `${TransitionStyle} 300ms ease`,
              ...modalStyle,
            }}
            ref={modalContainerRef}
            onAnimationEnd={!open ? () => setMount(false) : undefined}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

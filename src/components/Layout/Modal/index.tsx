import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./modal.sass";

export interface ModalProps {
  open: boolean;
  closeHandler: () => void;
  showBackdrop?: boolean;
  keepModalCentered: boolean;
  TransitionStyle: "fade" | "zoom" | "none";
  disableScroll?: boolean;
  children?: any;
  closeOnBackdropClick?: boolean;
  triggerElement?: React.RefObject<HTMLElement>;
  modalStyle?: React.CSSProperties;
}
const Modal = ({
  open = false,
  closeHandler,
  showBackdrop = true,
  keepModalCentered = true,
  TransitionStyle = "fade",
  children,
  closeOnBackdropClick = true,
  triggerElement,
  modalStyle,
}: ModalProps) => {
  const [mount, setMount] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  console.log(triggerElement?.current);
  useEffect(() => {
    if (open) {
      setMount(true);
    }
    if (
      !open &&
      TransitionStyle !== "none" &&
      overlayRef.current &&
      modalContainerRef.current
    ) {
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
    if (TransitionStyle === "none") {
      unMountModal();
    }
  }, [open, TransitionStyle, overlayRef, modalContainerRef]);

  useEffect(() => {
    if (
      !keepModalCentered &&
      triggerElement?.current &&
      modalContainerRef.current
    ) {
      // Get Client Position from MouseEvent
      // Assign that to the modal container for it's alignment
      const modalWidth = modalContainerRef.current.offsetWidth,
        modalHeight = modalContainerRef.current.offsetHeight;
      let { left: cursorLeft, top: cursorTop } =
        triggerElement.current.getBoundingClientRect();

      if (cursorLeft + modalWidth > window.innerWidth) {
        cursorLeft = window.innerWidth - modalWidth - 10;
      }
      if (cursorTop + modalHeight > window.innerHeight) {
        cursorTop = window.innerHeight - modalHeight - 10;
      }
      modalContainerRef.current.style.setProperty("left", `${cursorLeft}px`);
      modalContainerRef.current.style.setProperty("top", `${cursorTop}px`);
    }
  });
  const unMountModal = () => {
    console.log("Animation end");
    if (!open) {
      setMount(false);
      closeHandler && closeHandler();
      console.log("mount: false");
    }
  };

  return (
    <>
      {mount && (
        <div className="hd-ui-modal modal-container">
          <div
            className={`hd-ui-modal-overlay`}
            data-visible={showBackdrop}
            onClick={closeOnBackdropClick ? closeHandler : undefined}
            ref={overlayRef}
            style={
              TransitionStyle !== "none" ? { animation: "fade 400ms ease" } : {}
            }
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
            onAnimationEnd={unMountModal}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

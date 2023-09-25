import React from "react";
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
declare const Modal: ({ open, closeHandler, showBackdrop, keepModalCentered, TransitionStyle, children, closeOnBackdropClick, triggerElement, modalStyle, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
//# sourceMappingURL=index.d.ts.map
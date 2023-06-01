import React from "react";
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
    modalStyle?: React.CSSProperties;
}
declare const Modal: ({ open, closeHandler, showOverlay, keepModalCentered, TransitionStyle, children, closeOnOverlayClick, MouseEvent, modalStyle, }: ModalProps) => JSX.Element;
export default Modal;
//# sourceMappingURL=index.d.ts.map
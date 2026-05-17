import { default as React } from 'react';
export interface ModalProps {
    open: boolean;
    closeHandler: () => void;
    showBackdrop?: boolean;
    keepModalCentered: boolean;
    TransitionStyle: "fade" | "zoom" | "none";
    disableScroll?: boolean;
    children?: any;
    closeOnBlur?: boolean;
    closeOnBackDropClick?: boolean;
    triggerElement?: React.RefObject<HTMLElement | null>;
    modalStyle?: React.CSSProperties;
}
declare const Modal: ({ open, closeHandler, showBackdrop, keepModalCentered, TransitionStyle, children, closeOnBlur, closeOnBackDropClick, triggerElement, modalStyle, ...restProps }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
//# sourceMappingURL=index.d.ts.map
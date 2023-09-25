import { CSSProperties, ReactElement } from "react";
interface TorchBoxProps {
    children?: ReactElement;
    torchStyle?: {
        size: number;
        color?: string;
    };
    containerStyle: CSSProperties;
}
declare const TorchBox: ({ containerStyle, children, torchStyle }: TorchBoxProps) => import("react/jsx-runtime").JSX.Element;
export default TorchBox;
//# sourceMappingURL=TorchBox.d.ts.map
import { CSSProperties, ReactElement } from "react";
interface TorchBoxProps {
    children?: ReactElement;
    torchStyle?: {
        size: number;
    } & CSSProperties;
    containerStyle: CSSProperties;
}
declare const TorchBox: ({ containerStyle, children, torchStyle }: TorchBoxProps) => JSX.Element;
export default TorchBox;
//# sourceMappingURL=TorchBox.d.ts.map
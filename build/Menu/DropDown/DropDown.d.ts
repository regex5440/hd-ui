import { CSSProperties, ReactElement } from "react";
type DropDownOptionProp = {
    children: any;
    value: string;
    selected?: boolean;
    [restPropKey: string]: any;
};
type DropDownProps = {
    children: ReactElement<DropDownOptionProp> | ReactElement<DropDownOptionProp>[];
    onChange?: (value: any) => void;
    optionLayerStyle?: CSSProperties;
    style?: CSSProperties;
    selectedOptionStyle?: CSSProperties;
    defaultValue?: string;
    [restPropKey: string]: any;
};
declare const DropDown: {
    ({ children, onChange, style, optionLayerStyle, selectedOptionStyle, defaultValue, ...restProps }: DropDownProps): import("react/jsx-runtime").JSX.Element;
    Option({ children, value, selected, ...restProps }: DropDownOptionProp): import("react/jsx-runtime").JSX.Element;
};
export default DropDown;
//# sourceMappingURL=DropDown.d.ts.map
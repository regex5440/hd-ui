import React from "react";
type LinearLoaderProps = {
    width?: string;
    height?: string;
    trackColor?: string;
    riderColor?: string;
    withProgress?: boolean;
    style?: React.CSSProperties;
    percentage?: number;
    maxPercentage?: number;
};
type FiniteProps = {
    withProgress: true;
    percentage: number;
    maxPercentage: number;
} & LinearLoaderProps;
declare const LinearLoader: ({ height, width, riderColor, trackColor, withProgress, percentage, maxPercentage, style, }: LinearLoaderProps | FiniteProps) => import("react/jsx-runtime").JSX.Element;
export default LinearLoader;
//# sourceMappingURL=LinearLoader.d.ts.map
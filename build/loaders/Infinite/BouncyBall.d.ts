type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number},${number})`;
type HEX = `#${string}`;
type COLOR_NAME = string;
type CSSColor = RGB | RGBA | HEX | COLOR_NAME;
type BouncyBallProps = {
    ballColor?: CSSColor;
    containerColor?: CSSColor;
};
declare const BouncyBalls: ({ ballColor, containerColor }: BouncyBallProps) => JSX.Element;
export default BouncyBalls;
//# sourceMappingURL=BouncyBall.d.ts.map
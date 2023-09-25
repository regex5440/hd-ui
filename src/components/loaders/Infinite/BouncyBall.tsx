import React, { CSSProperties, useEffect, useRef } from "react";
import "./bouncyball.sass";
import { CSSColor } from "src/utils/types";

type BouncyBallProps = {
  ballColor?: CSSColor;
  style?: React.CSSProperties;
};

const BouncyBalls = ({ ballColor, style = {} }: BouncyBallProps) => {
  const bouncyLoaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bouncyLoaderRef.current) {
      if (ballColor)
        bouncyLoaderRef.current.style.setProperty(
          "--bouncyBallColor",
          ballColor,
        );
    }
  }, [ballColor, bouncyLoaderRef.current]);
  return (
    <div
      className="hd-ui-bouncy-loader loader-container"
      ref={bouncyLoaderRef}
      style={style}
    >
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </div>
  );
};

export default BouncyBalls;

import React, { CSSProperties, useEffect, useRef } from "react";
import "./bouncyball.sass";
import { CSSColor } from "src/utils/types";

type BouncyBallProps = {
  ballColor?: CSSColor;
  containerColor?: CSSColor;
};

const BouncyBalls = ({ ballColor, containerColor }: BouncyBallProps) => {
  const bouncyLoaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bouncyLoaderRef.current) {
      if (ballColor)
        bouncyLoaderRef.current.style.setProperty(
          "--bouncyBallColor",
          ballColor,
        );
      if (containerColor)
        bouncyLoaderRef.current.style.setProperty(
          "--bouncyBallContainerColor",
          containerColor,
        );
    }
  }, []);
  return (
    <div className="hd-ui-bouncy-loader loader-container" ref={bouncyLoaderRef}>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </div>
  );
};

export default BouncyBalls;

import React, { useEffect, useRef, useState } from "react";
import "./infinite.sass";
import { CSSColor } from "src/utils/types";

type CircularLoaderProps = {
  loaderColor?: CSSColor;
  backgroundColor?: CSSColor;
  width: number;
};

const CircularLoader = (props: CircularLoaderProps) => {
  const loaderCircle = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (loaderCircle.current) {
      const dasharray: number = loaderCircle.current.getTotalLength();
      loaderCircle.current.style.setProperty(
        "--dasharray",
        dasharray.toFixed(2) + "px",
      );
    }
  }, []);
  return (
    <div className="hdui-circular-loader loader-container">
      <svg className="circular-loader-surface" width={props.width}>
        <circle cx="50%" cy="50%" r="50%" stroke={props.backgroundColor} />
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          className="cover"
          stroke={props.loaderColor || "rgb(52, 52, 52)"}
          ref={loaderCircle}
        />
        <div className="circular-loader-animated-surface">H</div>
      </svg>
    </div>
  );
};

export default CircularLoader;

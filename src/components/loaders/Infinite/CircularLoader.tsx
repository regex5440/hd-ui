import React, { useEffect, useRef, useState } from "react";
import "./infinite.sass";
import { CSSColor } from "src/utils/types";

type CircularLoaderProps = {
  size: number;
  riderColor?: CSSColor;
  trackColor?: CSSColor;
  trackWidth?: number;
  riderWidth?: number;
};

const CircularLoader = ({
  size = 40,
  trackColor,
  riderColor,
  trackWidth = 10,
  riderWidth = 10,
}: CircularLoaderProps) => {
  const loaderCircle = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (loaderCircle.current) {
      const dasharray: number = loaderCircle.current?.getTotalLength?.() || 0;
      loaderCircle.current.style.setProperty(
        "--dasharray",
        dasharray.toFixed(2) + "px",
      );
    }
  }, [size]);
  const largerWidth = trackWidth > riderWidth ? trackWidth : riderWidth;
  return (
    <div className="hdui-circular-loader loader-container">
      <svg className="circular-loader-surface" width={size} height={size}>
        <circle
          cx="50%"
          cy="50%"
          r={`${50 - largerWidth}%`}
          stroke={trackColor}
          style={{ strokeWidth: `${trackWidth}%` }}
        />
        <circle
          cx="50%"
          cy="50%"
          r={`${50 - largerWidth}%`}
          className="cover"
          stroke={riderColor || "rgb(52, 52, 52)"}
          style={{ strokeWidth: `${riderWidth}%` }}
          ref={loaderCircle}
        />
        <div className="circular-loader-animated-surface">H</div>
      </svg>
    </div>
  );
};

export default CircularLoader;

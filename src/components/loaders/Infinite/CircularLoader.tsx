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
  const loader = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (loader.current) {
      const dasharray: number =
        loader.current
          ?.getElementsByClassName("cover")?.[0]
          // @ts-ignore
          ?.getTotalLength?.() || 0;
      loader.current.style.setProperty(
        "--dasharray",
        dasharray.toFixed(2) + "px",
      );
    }
  }, [size]);
  const largerWidth = trackWidth > riderWidth ? trackWidth : riderWidth;
  return (
    <div className="hdui-circular-loader loader-container">
      <svg
        className="circular-loader-surface"
        width={size}
        height={size}
        ref={loader}
      >
        <circle
          cx="50%"
          cy="50%"
          r={`${50 - largerWidth}%`}
          stroke={trackColor}
          style={{ strokeWidth: `${trackWidth}%` }}
          strokeLinecap="round"
        />
        <circle
          strokeLinecap="round"
          cx="50%"
          cy="50%"
          r={`${50 - largerWidth}%`}
          className="cover"
          stroke={riderColor || "rgb(52, 52, 52)"}
          style={{ strokeWidth: `${riderWidth}%` }}
        />
        <div className="circular-loader-animated-surface">H</div>
      </svg>
    </div>
  );
};

export default CircularLoader;

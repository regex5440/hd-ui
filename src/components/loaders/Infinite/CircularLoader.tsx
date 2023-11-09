import React, { useEffect, useRef, useState } from "react";
import "./infinite.sass";
import { CSSColor } from "src/utils/types";

type CircularLoaderProps = {
  size: number;
  riderColor?: CSSColor;
  trackColor?: CSSColor;
  trackWidth?: number;
  riderWidth?: number;
  style?: React.CSSProperties;
};

const CircularLoader = ({
  size = 40,
  trackColor,
  riderColor,
  trackWidth = 10,
  riderWidth = 10,
  style,
}: CircularLoaderProps) => {
  const loader = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (loader.current && getComputedStyle(loader.current).display !== "none") {
      console.log(getComputedStyle(loader.current).display);
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
    <div
      className="hdui-circular-loader loader-container"
      style={style}
      ref={loader}
    >
      <svg className="circular-loader-surface" width={size} height={size}>
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

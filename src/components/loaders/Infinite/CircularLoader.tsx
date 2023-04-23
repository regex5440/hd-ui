import React from "react";
import "./infinite.sass";
import { CSSColor } from "src/utils/types";

type CircularLoaderProps = {
  loaderColor?: CSSColor;
  backgroundColor?: CSSColor;
};

const CircularLoader = (props: CircularLoaderProps) => {
  return (
    <div className="hdui-circular-loader loader-container">
      <svg className="circular-loader-surface">
        <circle cx="50%" cy="50%" r="50%" stroke={props.backgroundColor} />
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          className="cover"
          stroke={props.loaderColor || "rgb(52, 52, 52)"}
        />
        <div className="circular-loader-animated-surface">H</div>
      </svg>
    </div>
  );
};

export default CircularLoader;

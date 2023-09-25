import React, { useEffect, useRef } from "react";
import "./infinite.sass";

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

const LinearLoader = ({
  height = "7px",
  width = "300px",
  riderColor = "#343434",
  trackColor = "#fff",
  withProgress = true,
  percentage = 0,
  maxPercentage = 100,
  style,
}: LinearLoaderProps | FiniteProps) => {
  const container = useRef<HTMLDivElement>(null);
  const rider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (riderColor) {
      container.current?.style.setProperty("--riderColor", riderColor);
    }
    if (trackColor) {
      container.current?.style.setProperty("--trackColor", trackColor);
    }
  }, [riderColor, trackColor, container.current]);

  const progress = (percentage / maxPercentage) * 100;

  return (
    <div
      className="hdui-linear-loader loader-container"
      style={{ height, width, ...style }}
      ref={container}
    >
      <div className="linear-loader-surface">
        <div
          className="linear-loader-animated-surface"
          ref={rider}
          data-type={withProgress ? "progress" : "loader"}
          style={
            withProgress
              ? {
                  width: `${
                    progress >= 0 ? progress : progress >= 100 ? 100 : 0
                  }%`,
                }
              : {}
          }
        ></div>
      </div>
    </div>
  );
};

export default LinearLoader;

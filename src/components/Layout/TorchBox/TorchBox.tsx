import React, {
  CSSProperties,
  MouseEvent,
  ReactElement,
  StyleHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import "./style.sass";

interface TorchBoxProps {
  children?: ReactElement;
  torchStyle?: {
    size: number;
  } & CSSProperties;
  containerStyle?: CSSProperties;
}

const TorchBox = ({ containerStyle, children, torchStyle }: TorchBoxProps) => {
  const torch = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (torchStyle) {
      try {
        let torchStyleObject: string = "";
        Object.entries(torchStyle).forEach(([key, value]: string[]) => {
          if (key !== "size") {
            torchStyleObject += `${key}:${value};`;
          } else {
            torchStyleObject += `width: ${(
              Number(torchStyle.size) * 100
            ).toFixed(2)}%;`;
          }
        });
        if (torch.current)
          torch.current.setAttribute("style", torchStyleObject);
      } catch (e) {
        console.error(e);
        console.log("Incorrect style format for `torchStyle` prop");
      }
    }
  }, []);
  const showTorch = () => {
    if (torch.current) {
      torch.current.style.visibility = "visible";
      torch.current.style.opacity = "1";
    }
  };
  const hideTorch = () => {
    if (torch.current) {
      torch.current.style.visibility = "hidden";
      torch.current.style.opacity = "0";
    }
  };
  const moveTorch = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const { top, left } = e.currentTarget.getBoundingClientRect();
    if (torch.current)
      torch.current.animate(
        {
          left: `${e.clientX - left}px`,
          top: `${e.clientY - top}px`,
        },
        { duration: 500, fill: "forwards" }
      );
  };

  return (
    <div
      className="hd-ui-torchbox torch-box-container"
      onMouseOver={showTorch}
      onMouseOut={hideTorch}
      onMouseMove={moveTorch}
    >
      <div ref={torch} className="torch-shadow"></div>
      <div className="torch-shadow-overlay"></div>
      <div
        className="torch-box-container__child-container"
        style={containerStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default TorchBox;

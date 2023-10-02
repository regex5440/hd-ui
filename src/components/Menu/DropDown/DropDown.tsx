import {
  CSSProperties,
  MouseEvent,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./dropdown.sass";

type DropDownOptionProp = {
  children: any;
  value: string;
  selected?: boolean;
  [restPropKey: string]: any;
};

type DropDownProps = {
  children:
    | ReactElement<DropDownOptionProp>
    | ReactElement<DropDownOptionProp>[];
  onChange?: (value: any) => void;
  optionLayerStyle?: CSSProperties;
  style?: CSSProperties;
  selectedOptionStyle?: CSSProperties;
  [restPropKey: string]: any;
};

const DropDown = ({
  children,
  onChange,
  style,
  optionLayerStyle,
  selectedOptionStyle,
  ...restProps
}: DropDownProps) => {
  const [showOption, setShowOption] = useState(false);
  const [storedOption, setStoredOption] = useState<any>();
  const ddLayer = useRef<HTMLDivElement>(null);
  const childrenLength = Array.isArray(children) ? children.length : 1;

  useEffect(() => {
    if (Array.isArray(children)) {
      for (const element of children) {
        if (element.props.selected) {
          setStoredOption(element.props.value);
          break;
        }
      }
    }
  }, [children]);

  if (showOption) {
    ddLayer.current?.focus();
  }
  // useEffect(() => {
  //   if (ddLayer.current) {
  //     ddLayer.current.onblur = () => {
  //       setShowOption(false);
  //     };
  //   }
  // }, [ddLayer, setShowOption]);

  const clickHandler = (e: SyntheticEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.dataset?.value) {
      const optionData = e.target.dataset.value;
      if (storedOption !== optionData) {
        setStoredOption(optionData);
        onChange?.(optionData);
      }
      setShowOption(false);
    } else {
      setShowOption(true);
    }
  };

  return (
    <div
      className="hd-ui-dropdown dropdown-container"
      style={style}
      {...restProps}
    >
      <div
        className="dropdown-container-set"
        onClick={clickHandler}
        aria-hidden={!showOption}
      >
        <div className="dropdown-button" style={selectedOptionStyle}>
          {storedOption || "--Select--"}
        </div>
        <div
          className="dropdown-layer"
          style={{ height: `${childrenLength * 100}%`, ...optionLayerStyle }}
          tabIndex={0}
          ref={ddLayer}
          onBlur={() => setShowOption(false)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

DropDown.Option = ({
  children,
  value,
  selected = false,
  ...restProps
}: DropDownOptionProp) => {
  return (
    <div
      className="hd-ui-dropdown-option"
      data-value={value}
      {...(selected ? { selected } : {})}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default DropDown;

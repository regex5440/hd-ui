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
  defaultValue?: string;
  [restPropKey: string]: any;
};

const DropDown = ({
  children,
  onChange,
  style,
  optionLayerStyle,
  selectedOptionStyle,
  defaultValue,
  ...restProps
}: DropDownProps) => {
  const [showOption, setShowOption] = useState(false);
  const [storedOption, setStoredOption] = useState<{
    layout: any;
    value: string;
  }>();
  const ddLayer = useRef<HTMLDivElement>(null);
  const childrenLength = Array.isArray(children) ? children.length : 1;

  useEffect(() => {
    if (Array.isArray(children)) {
      for (const element of children) {
        if (defaultValue === element.props.value || element.props.selected) {
          setStoredOption({
            layout: element.props.children,
            value: element.props.value,
          });
          break;
        }
      }
    }
  }, [children]);

  if (showOption) {
    ddLayer.current?.focus();
  }

  const clickHandler = (e: SyntheticEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.ariaLabel === "option") {
      const optionData =
        e.target.dataset.value || e.target.textContent?.trim() || "";
      if (storedOption?.value !== optionData) {
        setStoredOption({
          layout: e.target.innerHTML || optionData,
          value: optionData,
        });
        onChange?.(optionData);
      }
      setShowOption(false);
    } else {
      setShowOption(true);
    }
  };

  return (
    <div className="hd-ui-dropdown dropdown-container" {...restProps}>
      <div
        className="dropdown-container-set"
        onClick={clickHandler}
        aria-hidden={!showOption}
        style={style}
      >
        <div className="dropdown-button" style={selectedOptionStyle}>
          {storedOption?.layout || "--Select--"}
        </div>
        <div
          className="dropdown-layer"
          style={{ height: `${childrenLength * 100}%`, ...optionLayerStyle }}
          ref={ddLayer}
          tabIndex={0}
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
      aria-label="option"
      {...(selected ? { selected } : {})}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default DropDown;

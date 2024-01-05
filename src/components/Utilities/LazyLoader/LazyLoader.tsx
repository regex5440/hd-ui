import { ReactNode, useEffect, useRef } from "react";
import { CircularLoader } from "../../loaders";

interface LazyLoaderProps {
  Loader?: any;
  onVisibleHandler?: () => void;
  endOfData: boolean;
}

const LazyLoader = ({
  Loader = <CircularLoader size={39} />,
  onVisibleHandler,
  endOfData,
}: LazyLoaderProps) => {
  const observableElement = useRef<HTMLDivElement>(null);
  const observer = useRef(
    new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        onVisibleHandler && onVisibleHandler();
      }
    }),
  );

  useEffect(() => {
    if (observableElement.current) {
      observer.current.observe(observableElement.current);
    }
    () => {
      observer.current?.disconnect();
    };
  }, []);
  if (endOfData) {
    observer.current?.disconnect();
  }

  return (
    <div
      className="hd-ui-lazy-loader lazy-loader-container"
      ref={observableElement}
    >
      {!endOfData && Loader}
    </div>
  );
};

export default LazyLoader;

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
        console.log("Hello");
        onVisibleHandler?.();
      }
    }),
  );

  useEffect(() => {
    if (observableElement.current) {
      observer.current = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting) {
          onVisibleHandler?.();
        }
      });
      observer.current.observe(observableElement.current);
    }
    () => {
      observer.current?.disconnect();
    };
  }, [endOfData]);

  return (
    <>
      {!endOfData && (
        <div
          className="hd-ui-lazy-loader lazy-loader-container"
          ref={observableElement}
        >
          {Loader}
        </div>
      )}
    </>
  );
};

export default LazyLoader;

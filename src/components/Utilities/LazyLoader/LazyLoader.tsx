import { useEffect, useRef } from "react";

interface LazyLoaderProps {
  Loader?: JSX.Element;
  onVisibleHandler?: () => void;
  endOfData: boolean;
}

const LazyLoader = ({
  Loader,
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

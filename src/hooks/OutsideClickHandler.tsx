import React from "react";

export const OutsideClickHandler = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const wrapperRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        alert("You clicked outside of me!");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return <div ref={wrapperRef}>{children}</div>;
};

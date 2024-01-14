import React from "react";

interface Props<T> {
  each: T[];
  children: (item: T, index?: number) => React.ReactNode;
}

const For = <T extends unknown>({ each, children }: Props<T>) => {
  return (
    <>
      {each.map((item, index) => {
        return (
          <React.Fragment key={index}>{children(item, index)}</React.Fragment>
        );
      })}
    </>
  );
};

export default For;

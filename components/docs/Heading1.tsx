import React, { FC } from "react";

type Props = { children: string };

export const Heading1: FC<Props> = (props) => {
  return (
    <>
      <h1 className="Heading1">{props.children}</h1>

      <style jsx>{`
        .Heading1 {
          font-size: var(--font-size-7);
          line-height: var(--line-height-7);
          font-weight: var(--font-weight-bold);
        }
      `}</style>
    </>
  );
};

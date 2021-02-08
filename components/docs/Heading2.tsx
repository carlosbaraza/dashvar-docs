import React, { FC } from "react";

type Props = { children: string };

export const Heading2: FC<Props> = (props) => {
  return (
    <>
      <h1 className="Heading2">{props.children}</h1>

      <style jsx>{`
        .Heading2 {
          font-size: var(--font-size-6);
          line-height: var(--line-height-6);
          font-weight: var(--font-weight-bold);
        }
      `}</style>
    </>
  );
};

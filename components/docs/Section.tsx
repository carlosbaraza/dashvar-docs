import React, { FC, ReactNode } from "react";

type Props = { children: ReactNode };

export const Section: FC<Props> = (props) => {
  return (
    <>
      <section className="Section">{props.children}</section>

      <style jsx>{`
        .Section {
        }

        .Section > :global(* + *) {
          margin-top: var(--size-07);
        }
      `}</style>
    </>
  );
};

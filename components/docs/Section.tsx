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

        .Section :global(a) {
          color: var(--yellow-800);
          font-weight: var(--font-weight-bold);
        }

        .Section :global(a:hover) {
          color: var(--yellow-500);
        }

        .Section :global(code) {
          display: block;
          font-family: var(--font-family-mono);
          font-size: var(--font-size-1);
          line-height: 1.5;
          background: var(--gray-800);
          border-radius: var(--border-radius-3);
          color: var(--white);
          padding: var(--size-05);
        }

        .Section :global(p code) {
          padding: var(--size-02) var(--size-02);
          line-height: 1;
          color: var(--white);
          border-radius: var(--border-radius-2);
          align-items: baseline;
          display: inline-flex;
          vertical-align: baseline;
        }
      `}</style>
    </>
  );
};

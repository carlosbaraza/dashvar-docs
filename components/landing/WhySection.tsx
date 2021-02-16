import React, { FC } from "react";

type Props = {};

export const WhySection: FC<Props> = (props) => {
  return (
    <>
      <div className="WhySection">
        <h2>Why does it matter?</h2>
        <ul>
          <li>Less cognitive load</li>
          <li>
            Don't play the pixel or colour game, just choose among a few well
            thought ones
          </li>
          <li>Well engineered Design System</li>
          <li>Consistent User Interfaces</li>
          <li>Don't relearn CSS by memorizing classes</li>
          <li>Just CSS Variables</li>
        </ul>
      </div>

      <style jsx>{`
        .WhySection {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        h2 {
          font-size: var(--font-size-8);
          line-height: var(--line-height-8);
          font-weight: var(--font-weight-bold);
        }

        .WhySection > :global(* + *) {
          margin-top: var(--size-07);
        }

        ul {
          column-count: 1;
          column-gap: var(--size-06);
        }

        @media (min-width: 768px) {
          ul {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          ul {
            column-count: 3;
          }
        }

        li {
          break-inside: avoid;
          margin-bottom: var(--size-06);
          padding: var(--size-06);
          background: linear-gradient(
            200deg,
            var(--yellow-100),
            var(--red-100)
          );
          font-family: var(--font-family-mono);
          color: var(--black);
          font-size: var(--font-size-5);
          line-height: var(--line-height-5);
          letter-spacing: var(--letter-spacing-1);
          font-weight: var(--font-weight-bold);
          border-radius: var(--border-radius-5);
        }
      `}</style>
    </>
  );
};

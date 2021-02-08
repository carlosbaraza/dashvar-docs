import React, { FC } from "react";
import { CodeSandboxEmbed } from "./CodeSandboxEmbed";

type Props = {};

export const WhySection: FC<Props> = (props) => {
  return (
    <>
      <div className="WhySection">
        <h2>Why does it matter?</h2>
        <ul>
          <li>Less cognitive load.</li>
          <li>
            Only choose among a few options (colour palette, sizing system, and
            others).
          </li>
          <li>Well engineered design system.</li>
          <li>Consistent user interfaces.</li>
          <li>Don't relearn CSS by picking up another framework.</li>
          <li>Just CSS Variables, no classes to memorize.</li>
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
          background: var(--amber-200);
          color: var(--amber-900);
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-bold);
          border-radius: var(--border-radius-5);
        }
      `}</style>
    </>
  );
};

import { outlineVariables } from "dashvar/lib/variables/outline";
import React, { FC } from "react";
import { OutlineItem } from "./OutlineItem";

type Props = {};

export const OutlineShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="OutlineShowcase">
        {outlineVariables.map((variable) => (
          <OutlineItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .OutlineShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-column-gap: var(--size-08);
          grid-row-gap: var(--size-08);
          padding: var(--size-06);
          background: var(--gray-400);
          border-radius: var(--border-radius-5);
        }

        @media (min-width: 1024px) {
          .OutlineShowcase {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};

import { outlineOffsetVariables } from "dashvar/lib/variables/outline-offset";
import React, { FC } from "react";
import { OutlineOffsetItem } from "./OutlineOffsetItem";

type Props = {};

export const OutlineOffsetShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="OutlineOffsetShowcase">
        {outlineOffsetVariables.map((variable) => (
          <OutlineOffsetItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .OutlineOffsetShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-column-gap: var(--size-08);
          grid-row-gap: var(--size-08);
          padding: var(--size-06);
          background: var(--gray-400);
          border-radius: var(--border-radius-5);
        }

        @media (min-width: 1024px) {
          .OutlineOffsetShowcase {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};
